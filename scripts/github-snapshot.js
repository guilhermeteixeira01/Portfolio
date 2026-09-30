// Salva um retrato dos dados do GitHub em src/data/github-snapshot.json.
// Roda automaticamente antes do build (script "prebuild"). O site usa esse retrato
// quando a API do GitHub estiver indisponível ou com o limite de requisições estourado.
// Opcional: defina GITHUB_TOKEN para ter um limite maior de requisições.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const out = path.join(root, "src", "data", "github-snapshot.json");
const profileSource = fs.readFileSync(path.join(root, "src", "data", "profile.js"), "utf8");
const username = profileSource.match(/github:\s*"([^"]+)"/)[1];

const headers = { Accept: "application/vnd.github+json" };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function getJson(url) {
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`${res.status} em ${url}`);
  return res.json();
}

(async () => {
  try {
    const [user, repos] = await Promise.all([
      getJson(`https://api.github.com/users/${username}`),
      getJson(`https://api.github.com/users/${username}/repos?per_page=100`),
    ]);
    const snapshot = {
      generatedAt: new Date().toISOString(),
      user: {
        public_repos: user.public_repos,
        followers: user.followers,
        since: new Date(user.created_at).getFullYear(),
      },
      repos: Object.fromEntries(repos.map((r) => [r.name, { stars: r.stargazers_count, forks: r.forks_count }])),
    };
    fs.writeFileSync(out, JSON.stringify(snapshot, null, 2) + "\n");
    console.log(`Retrato do GitHub atualizado (${repos.length} repositórios).`);
  } catch (err) {
    console.warn(`Não foi possível atualizar o retrato do GitHub (${err.message}). Mantendo o anterior.`);
  }
})();
