import GalaxyBrain from "../img/Achievements Github/galaxy-brain.png";
import PairExtraordinaire from "../img/Achievements Github/pair-extraordinaire.png";
import PullShark from "../img/Achievements Github/pull-shark.png";
import QuickDraw from "../img/Achievements Github/quickdraw.png";
import Yolo from "../img/Achievements Github/yolo.png";
import StarStruck from "../img/Achievements Github/StarStruck.png";
import ImgCalisthenic from "../img/projects/solo leveling.jpg";
import ImgChatManager from "../img/projects/minecraft.jpeg";
import ImgAmxx from "../img/projects/cs.jpg";

const devicon = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

const PAWN_ICON =
  "https://sarrus.gallerycdn.vsassets.io/extensions/sarrus/sourcepawn-vscode/8.1.8/1761185045013/Microsoft.VisualStudio.Services.Icons.Default";

export const profile = {
  name: "Guilherme Teixeira",
  role: "Desenvolvedor Full Stack",
  // Palavras que alternam na linha "// especialista em ..." do topo.
  roles: ["Sites & Sistemas Web", "Aplicativos", "Plugins para Jogos", "Servidores de Jogos", "APIs & Back-end"],
  location: "Brasil",
  available: true,
  github: "guilhermeteixeira01",
  avatar: "https://avatars.githubusercontent.com/u/220722197?v=4",
  headline:
    "Desenvolvo de ponta a ponta: sites e sistemas web, aplicativos, plugins para jogos e servidores de jogos. Se tem código envolvido, eu resolvo.",
  about: [
    "Sou desenvolvedor Full Stack formado em Técnico de TI e não me prendo a uma única área. Construo aplicações web com React e Node.js, desenvolvo aplicativos e crio plugins e sistemas para servidores de jogos em Java, Pawn, C++ e C#.",
    "Já fiz de tudo um pouco: plugins para servidores de Minecraft e Counter-Strike 1.6, launchers, bots e aplicações web como o Calisthenic Leveling, um app gamificado de treinos que já recebeu estrelas da comunidade no GitHub.",
    "Gosto de pegar uma ideia, entender o problema e entregar algo que funciona de verdade, seja um site, um app ou um servidor de jogo rodando.",
  ],
  links: {
    github: "https://github.com/guilhermeteixeira01",
    linkedin: "https://www.linkedin.com/in/guilherme-teixeira-86499732a/",
    whatsapp: "https://wa.me/5561999647021",
    // Preencha para exibir o botão de e-mail na seção de contato.
    email: "",
  },
  resume: `${process.env.PUBLIC_URL}/resume.pdf`,
  portfolioRepo: "Portfolio",
};

export const skillGroups = [
  {
    title: "Linguagens",
    items: [
      { name: "C++", icon: devicon("cplusplus") },
      { name: "C#", icon: devicon("csharp") },
      { name: "JavaScript", icon: devicon("javascript") },
      { name: "Java", icon: devicon("java") },
      { name: "Pawn", icon: PAWN_ICON },
    ],
  },
  {
    title: "Frameworks & Runtime",
    items: [
      { name: "React", icon: devicon("react") },
      { name: "Node.js", icon: devicon("nodejs") },
    ],
  },
  {
    title: "Front-end",
    items: [
      { name: "HTML5", icon: devicon("html5") },
      { name: "CSS3", icon: devicon("css3") },
    ],
  },
  {
    title: "Ferramentas",
    items: [
      { name: "Git", icon: devicon("git") },
      { name: "GitHub", icon: devicon("github"), invert: true },
      { name: "VS Code", icon: devicon("vscode") },
    ],
  },
];

export const projects = [
  {
    repo: "calisthenic-leveling",
    title: "Calisthenic Leveling",
    featured: true,
    image: ImgCalisthenic,
    description:
      "Aplicação web interativa que combina treinos de calistenia com um sistema de progressão gamificada inspirado em Solo Leveling: níveis, missões diárias e evolução do personagem.",
    tech: ["React", "JavaScript", "CSS", "Firebase"],
  },
  {
    repo: "ChatManager-MC",
    title: "ChatManager MC",
    image: ImgChatManager,
    description:
      "Plugin para servidores Minecraft escrito em Java, focado em personalizar e gerenciar as mensagens do chat do jogo.",
    tech: ["Java", "Minecraft"],
  },
  {
    repo: "Amxx-zp",
    title: "AMXX Zombie Plague",
    image: ImgAmxx,
    description:
      "Coleção de plugins, addons e códigos-fonte para servidores de Counter-Strike 1.6, com foco no modo Zombie e suas variações.",
    tech: ["Pawn", "AMX Mod X"],
  },
];

export const education = [
  {
    title: "Curso Técnico em Tecnologia da Informação",
    institution: "Escola Técnica Deputado Juarezão",
    period: "Concluído em 2024",
    detail: "Duração de 1 ano e meio",
  },
  {
    title: "Curso de JavaScript",
    institution: "Curso em Vídeo",
    period: "Concluído em 2021",
  },
  {
    title: "Curso de JavaScript com Node.js",
    institution: "Rincko Dev",
    href: "https://www.youtube.com/watch?v=lQAJ-T1QTYc&list=PL9tY_tDo_Q0C0hs1aGgtJbEH1EBlyzZdG",
    period: "Concluído em 2021",
  },
  {
    title: "Curso de HTML e CSS",
    institution: "Curso em Vídeo",
    period: "Concluído em 2020",
  },
];

export const achievements = [
  { name: "StarStruck", image: StarStruck, description: "Criou um repositório com muitas estrelas.", href: "https://github.com/guilhermeteixeira01/calisthenic-leveling" },
  { name: "Galaxy Brain", image: GalaxyBrain, description: "Teve respostas aceitas em discussões.", href: null },
  { name: "Pull Shark", image: PullShark, description: "Abriu pull requests que foram mergeados.", href: "https://github.com/guilhermeteixeira01/minebrothers-web/pull/2" },
  { name: "Pair Extraordinaire", image: PairExtraordinaire, description: "Coautor de commits em pull requests mergeados.", href: "https://github.com/guilhermeteixeira01/minebrothers-web/pull/5" },
  { name: "Quickdraw", image: QuickDraw, description: "Fechou uma issue/PR em até 5 minutos.", href: "https://github.com/guilhermeteixeira01/minebrothers-web/pull/3" },
  { name: "YOLO", image: Yolo, description: "Mergeou um pull request sem revisão.", href: "https://github.com/guilhermeteixeira01/minebrothers-web/pull/1" },
];
