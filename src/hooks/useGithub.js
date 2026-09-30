import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import snapshot from "../data/github-snapshot.json";

// A API do GitHub sem login permite só 60 requisições/hora por IP. Para não estourar:
// - buscamos tudo em 2 requisições (perfil + lista de repositórios);
// - guardamos o resultado no navegador por 1 hora;
// - se a API falhar, usamos o último cache ou o retrato gerado no build (github-snapshot.json)
//   e só tentamos de novo quando o GitHub liberar o limite (cabeçalho X-RateLimit-Reset).

const API = "https://api.github.com";
const CACHE_KEY = "github-cache-v1";
const TTL = 60 * 60 * 1000;
const RETRY_AFTER_ERROR = 15 * 60 * 1000;

// Converte as respostas da API para o mesmo formato do snapshot.
export function normalize(user, repos) {
  return {
    user: {
      public_repos: user.public_repos,
      followers: user.followers,
      since: new Date(user.created_at).getFullYear(),
    },
    repos: Object.fromEntries(repos.map((r) => [r.name, { stars: r.stargazers_count, forks: r.forks_count }])),
  };
}

function readCache() {
  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY));
    return cached?.data ? cached : null;
  } catch {
    return null;
  }
}

// `nextFetch`: a partir de quando vale buscar de novo na API.
function writeCache(data, nextFetch) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ nextFetch, data }));
  } catch {}
}

async function getJson(path) {
  const res = await fetch(`${API}${path}`);
  if (!res.ok) {
    const err = new Error(`GitHub API ${res.status}`);
    const reset = Number(res.headers?.get?.("X-RateLimit-Reset"));
    if (reset) err.retryAt = reset * 1000;
    throw err;
  }
  return res.json();
}

let request = null;

function loadGithub() {
  if (!request) {
    const cached = readCache();
    if (cached && Date.now() < cached.nextFetch) {
      request = Promise.resolve(cached.data);
    } else {
      const user = profile.github;
      request = Promise.all([getJson(`/users/${user}`), getJson(`/users/${user}/repos?per_page=100`)])
        .then(([u, r]) => {
          const data = normalize(u, r);
          writeCache(data, Date.now() + TTL);
          return data;
        })
        .catch((err) => {
          const data = cached?.data ?? snapshot;
          writeCache(data, err.retryAt ?? Date.now() + RETRY_AFTER_ERROR);
          return data;
        });
    }
  }
  return request;
}

// Retorna { user, repos } — começa com o snapshot e troca pelos dados ao vivo quando chegam.
export function useGithub() {
  const [data, setData] = useState(snapshot);

  useEffect(() => {
    let active = true;
    loadGithub().then((d) => active && setData(d));
    return () => {
      active = false;
    };
  }, []);

  return data;
}
