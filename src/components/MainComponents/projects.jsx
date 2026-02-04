import { useEffect, useMemo, useState } from "react";

import PawnIcon from '../../img/icons/Pawn.png';
import FireBase from '../../img/icons/FireBase.jfif';
import RepoAmxx from '../../img/projects/AmxRepo.jfif';
import RepoChatMc from '../../img/projects/ChatManagerRepo.jpg';
import RepoCalistenic from '../../img/projects/RepoCalistenic.jpeg';

export default function Projects() {
    const repos = useMemo(() => [
        { username: "guilhermeteixeira01", repo: "calisthenic-leveling" },
        { username: "guilhermeteixeira01", repo: "ChatManager-MC" },
        { username: "guilhermeteixeira01", repo: "Amxx-zp" },
    ], []);

    const [stars, setStars] = useState([]);
    const [forks, setForks] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [apiError, setApiError] = useState(false);

    useEffect(() => {
        let isMounted = true;

        async function fetchAll() {
            try {
                const results = await Promise.all(
                    repos.map(async ({ username, repo }) => {
                        const repoRes = await fetch(
                            `https://api.github.com/repos/${username}/${repo}`
                        );
                        if (!repoRes.ok) throw new Error("Erro ao buscar repo");

                        const repoData = await repoRes.json();

                        const langRes = await fetch(
                            `https://api.github.com/repos/${username}/${repo}/languages`
                        );
                        const langData = langRes.ok ? await langRes.json() : {};

                        return {
                            stars: repoData.stargazers_count ?? 0,
                            forks: repoData.forks_count ?? 0,
                            languages: Object.keys(langData),
                        };
                    })
                );

                if (isMounted) {
                    setStars(results.map(r => r.stars));
                    setForks(results.map(r => r.forks));
                    setLanguages(results.map(r => r.languages));
                    setApiError(false);
                }
            } catch (err) {
                console.error("Erro geral ao buscar dados do GitHub:", err);
                if (isMounted) setApiError(true);
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        fetchAll();

        return () => {
            isMounted = false;
        };
    }, [repos]);

    return (
        <section id="project" className="three-section">
            <h1 data-aos="flip-up" data-aos-duration="1500">Projetos</h1>
            <div className="divcards">
                {!loading && apiError && (
                    <div className="repo-error-card">
                        <div className="repo-error-icon">🚫</div>
                        <h2>Repositórios Indisponíveis</h2>
                        <p>
                            Não foi possível carregar os dados do GitHub no momento.<br />
                            Tente novamente mais tarde.
                        </p>
                    </div>
                )}
                {!loading && !apiError && (
                    <>
                        <div className="card-project">
                            <div className="title-card">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap h-6 w-6"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                                <div className="title-card2">
                                    <h1>{repos[0].repo}</h1>
                                    <p>{languages[0]?.[0]}</p>
                                </div>
                            </div>
                            <div className="desc-card">
                                <p>Um projeto de aplicação web interativa que combina treino de calistenia (exercícios com o próprio peso) com um sistema de progressão gamificada.</p>
                                <div className="boxlangs">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" />
                                    <img src={FireBase} alt="FireBase" />
                                </div>

                                <div className="boxdesclangs">
                                    <span>React</span>
                                    <span>{languages[0]?.[0]}</span>
                                    <span>{languages[0]?.[1]}</span>
                                    <span>{languages[0]?.[2]}</span>
                                    <span>FireBase</span>
                                </div>
                            </div>
                            <div className="boximg">
                                <img src={RepoCalistenic} alt="RepoCalistenic" />
                            </div>
                            <div className="footergithub">
                                <svg className="icon star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>{stars[0]}</span>
                                <svg className="icon fork" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path><path d="M12 12v3"></path></svg><span>{forks[0]}</span>

                                <div className="footer-right" onClick={() => window.open(`https://github.com/${repos[0].username}/${repos[0].repo}`, "_blank")}>
                                    <span className="code-link">Code </span>
                                    <svg className="icon-external" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                </div>
                            </div>
                        </div>

                        <div className="card-project">
                            <div className="title-card">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap h-6 w-6"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                                <div className="title-card2">
                                    <h1>{repos[1].repo}</h1>
                                    <p>{languages[1]?.[0]}</p>
                                </div>
                            </div>
                            <div className="desc-card">
                                <p>ChatManager-MC é um plugin/mod para servidores Minecraft, escrito em Java, com foco em personalizar e gerenciar mensagens do chat do jogo.</p>
                                <div className="boxlangs">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" />
                                </div>

                                <div className="boxdesclangs">
                                    <span>{languages[1]?.[0]}</span>
                                </div>
                            </div>
                            <div className="boximg">
                                <img src={RepoChatMc} alt="RepoChatMc" />
                            </div>
                            <div className="footergithub">
                                <svg className="icon star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>{stars[1]}</span>
                                <svg className="icon fork" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path><path d="M12 12v3"></path></svg><span>{forks[1]}</span>

                                <div className="footer-right" onClick={() => window.open(`https://github.com/${repos[1].username}/${repos[1].repo}`, "_blank")}>
                                    <span className="code-link">Code </span>
                                    <svg className="icon-external" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                </div>
                            </div>
                        </div>

                        <div className="card-project">
                            <div className="title-card">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap h-6 w-6"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                                <div className="title-card2">
                                    <h1>{repos[2].repo}</h1>
                                    <p>{languages[2]?.[1]}</p>
                                </div>
                            </div>
                            <div className="desc-card">
                                <p>Este repositório contém plugins, addons e códigos fonte para servidores de Counter-Strike 1.6, com foco no modo Zumbi (Zombie Mod) e variações.</p>
                                <div className="boxlangs">
                                    <img src={PawnIcon} alt="Pawn" />
                                </div>

                                <div className="boxdesclangs">
                                    <span>{languages[2]?.[1]}</span>
                                </div>
                            </div>
                            <div className="boximg">
                                <img src={RepoAmxx} alt="RepoAmxx" />
                            </div>
                            <div className="footergithub">
                                <svg className="icon star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <span>{stars[2]}</span>
                                <svg className="icon fork" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path><path d="M12 12v3"></path></svg><span>{forks[2]}</span>

                                <div className="footer-right" onClick={() => window.open(`https://github.com/${repos[2].username}/${repos[2].repo}`, "_blank")}>
                                    <span className="code-link">Code </span>
                                    <svg className="icon-external" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                </div>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </section>
    );
}