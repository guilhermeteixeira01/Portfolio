// Gera public/resume.pdf a partir de resume/curriculo.html usando o Edge (ou Chrome) em modo headless.
const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

const candidates = [
  process.env.BROWSER_PATH,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const browser = candidates.find((p) => fs.existsSync(p));
if (!browser) {
  console.error("Nenhum Edge/Chrome encontrado. Defina BROWSER_PATH com o caminho do navegador.");
  process.exit(1);
}

const source = path.join(__dirname, "curriculo.html");
const output = path.join(__dirname, "..", "public", "resume.pdf");

execFileSync(
  browser,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--virtual-time-budget=5000",
    `--print-to-pdf=${output}`,
    pathToFileURL(source).href,
  ],
  { stdio: "ignore" }
);

console.log(`Currículo gerado em ${path.relative(process.cwd(), output)}`);
