import { useEffect, useState } from "react";

const API = "https://api.github.com";
const cache = new Map();

async function getJson(path) {
  if (!cache.has(path)) {
    cache.set(
      path,
      fetch(`${API}${path}`).then((res) => {
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        return res.json();
      })
    );
  }
  try {
    return await cache.get(path);
  } catch (err) {
    cache.delete(path);
    throw err;
  }
}

// Retorna { data, error } para um endpoint da API do GitHub (ex.: "/users/foo").
export function useGithub(path) {
  const [state, setState] = useState({ data: null, error: null });

  useEffect(() => {
    let active = true;
    getJson(path)
      .then((data) => active && setState({ data, error: null }))
      .catch((error) => active && setState({ data: null, error }));
    return () => {
      active = false;
    };
  }, [path]);

  return state;
}
