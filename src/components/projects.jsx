import { useEffect, useState } from "react";

export default function Projects() {
    const repos = [
        { username: "guilhermeteixeira01", repo: "calisthenic-leveling" },
        { username: "guilhermeteixeira01", repo: "ChatManager-MC" },
        { username: "guilhermeteixeira01", repo: "Amxx-zp" },
    ];

    const [stars, setStars] = useState([]);
    const [forks, setForks] = useState([]);
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        const headers = {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        };

        let isMounted = true;

        async function fetchAll() {
            const results = await Promise.all(
                repos.map(async ({ username, repo }) => {
                    try {
                        const repoRes = await fetch(
                            `https://api.github.com/repos/${username}/${repo}`,
                            { headers }
                        );
                        if (!repoRes.ok) throw new Error("Erro ao buscar repo");
                        const repoData = await repoRes.json();

                        const langRes = await fetch(
                            `https://api.github.com/repos/${username}/${repo}/languages`,
                            { headers }
                        );
                        const langData = langRes.ok ? await langRes.json() : {};

                        return {
                            stars: repoData.stargazers_count ?? 0,
                            forks: repoData.forks_count ?? 0,
                            languages: Object.keys(langData),
                        };
                    } catch (err) {
                        console.error(err);
                        return { stars: 0, forks: 0, languages: [] };
                    }
                })
            );

            if (isMounted) {
                setStars(results.map((r) => r.stars));
                setForks(results.map((r) => r.forks));
                setLanguages(results.map((r) => r.languages));
            }
        }

        fetchAll();

        return () => {
            isMounted = false;
        };
    }, [repos]);

    return (
        <section id="project" className="three-section">
            <h1 data-aos="flip-up" data-aos-duration="1500">Project</h1>
            <div className="divcards">
                <div className="card-project">
                    <div className="title-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap h-6 w-6"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                        <div className="title-card2">
                            <h1>{repos[0].repo}</h1>
                            <p>React</p>
                        </div>
                    </div>
                    <div className="desc-card">
                        <p>Um projeto de aplicação web interativa que combina treino de calistenia (exercícios com o próprio peso) com um sistema de progressão gamificada.</p>
                        <div className="boxlangs">
                            <img src="https://skillicons.dev/icons?i=react&theme=dark&size=32" alt="React" />
                            <img src={`https://skillicons.dev/icons?i=${languages[0]?.[0]?.toLowerCase()}&theme=dark&size=32`} alt={languages[0]?.[0]} />
                            <img src={`https://skillicons.dev/icons?i=${languages[0]?.[1]?.toLowerCase()}&theme=dark&size=32`} alt={languages[0]?.[1]} />
                            <img src={`https://skillicons.dev/icons?i=${languages[0]?.[2]?.toLowerCase()}&theme=dark&size=32`} alt={languages[0]?.[2]} />
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
                        <img src="https://github.com/user-attachments/assets/9047e733-3161-44e3-8d41-c6faf3084cca" alt="RepoCalistenic" />
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
                            <img src={`https://skillicons.dev/icons?i=${languages[1]?.[0]?.toLowerCase()}&theme=dark&size=32`} alt={languages[1]?.[0]} />
                        </div>

                        <div className="boxdesclangs">
                            <span>{languages[1]?.[0]}</span>
                        </div>
                    </div>
                    <div className="boximg">
                        <img src="https://i.ytimg.com/vi/zYiI3sI7l0E/maxresdefault.jpg" alt="RepoChatMc" />
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
                            <img src="https://skillicons.dev/icons?i=cpp&theme=dark&size=32" alt="C++" />
                        </div>

                        <div className="boxdesclangs">
                            <span>{languages[2]?.[1]}</span>
                        </div>
                    </div>
                    <div className="boximg">
                        <img src="data:image/jpeg;base64,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" alt="RepoAmxx" />
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
            </div>
        </section>
    );
}