import { useEffect, useState } from "react";

import GalaxyBrain from "../img/Achievements Github/galaxy-brain.png";
import PairExtraordinaire from "../img/Achievements Github/pair-extraordinaire.png"
import PullShark from "../img/Achievements Github/pull-shark.png"
import QuickDraw from "../img/Achievements Github/quickdraw.png"
import Yolo from "../img/Achievements Github/yolo.png"
import StarStruck from "../img/Achievements Github/StarStruck.png"

export default function Main() {
    const [openCard, setOpenCard] = useState(null);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("home");
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const sectionHeight = rect.height;

            const scrolled = Math.min(Math.max(-rect.top, 0), sectionHeight);
            const newOpacity = 1 - scrolled / (sectionHeight * 0.8);

            setOpacity(newOpacity < 0 ? 0 : newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToNext = () => {
        const section = document.getElementById("home");
        if (section?.nextElementSibling) {
            section.nextElementSibling.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <section id="home" className="first-section">
                <div className="My">
                    <h3>Hi, I am</h3>
                    <h1>Guilherme Teixeira</h1>
                    <h4>A Full Stack Web Developer</h4>

                    <button className="Resume" onClick={() => window.open(process.env.PUBLIC_URL + "/resume.pdf", "_blank")}>Resume</button>
                    <div className="midiasocial">
                        <button className="iconBtn hireme">Hire Me</button>
                        <button className="iconBtn github" aria-label="GitHub" onClick={() => window.open("https://github.com/guilhermeteixeira01", "_blank")}>
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.68.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.2.67.79.56A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                            </svg>
                        </button>

                        <button className="iconBtn linkedin" aria-label="LinkedIn" onClick={() => window.open("https://www.linkedin.com/in/guilherme-teixeira-86499732a/", "_blank")}>
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4V24h-4V8zm7 0h3.83v2.16h.05c.53-1 1.83-2.16 3.77-2.16 4.03 0 4.77 2.65 4.77 6.1V24h-4v-7.5c0-1.8-.03-4.12-2.5-4.12-2.5 0-2.88 1.95-2.88 3.98V24h-4V8z" />
                            </svg>
                        </button>

                    </div>
                </div>

                <div className="box">
                    <img src="https://avatars.githubusercontent.com/u/220722197?v=4" className="Perfil" />
                    <div className="boxachievements">
                        <h1>Insígnias do Github</h1>
                        <div className="achievements">
                            <img src={GalaxyBrain} onClick={() => setOpenCard(1)} />
                            <img src={PairExtraordinaire} onClick={() => setOpenCard(2)} />
                            <img src={PullShark} onClick={() => setOpenCard(3)} />
                            <img src={QuickDraw} onClick={() => setOpenCard(4)} />
                            <img src={Yolo} onClick={() => setOpenCard(5)} />
                            <img src={StarStruck} onClick={() => setOpenCard(6)} />
                        </div>
                    </div>
                </div>

                {openCard === 1 && (
                    <div className="background" id="card1">
                        <div className="boxgalaxybrain">
                            <div className="boxsair" onClick={() => setOpenCard(null)}>
                                <i className="fa-solid fa-x"></i>
                            </div>

                            <div className="card">
                                <img
                                    src={GalaxyBrain}
                                    loading="lazy"
                                    alt="Galaxy Brain badge"
                                />
                            </div>

                            <div className="info">
                                <div className="title">
                                    <h3>Galaxy Brain</h3>
                                    <p style={{ color: "snow" }}>
                                        @guilhermeteixeira01 answered discussions.
                                    </p>
                                </div>

                                <div className="link">
                                    <p>History</p>
                                    <br />

                                    <div className="timeline2">
                                        <div className="unlock">
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                width="16"
                                                className="icon trophy"
                                            >
                                                <path d="M3.217 6.962A3.75 3.75 0 0 1 0 3.25v-.5C0 1.784.784 1 1.75 1h1.356c.228-.585.796-1 1.462-1h6.864c.647 0 1.227.397 1.462 1h1.356c.966 0 1.75.784 1.75 1.75v.5a3.75 3.75 0 0 1-3.217 3.712 5.014 5.014 0 0 1-2.771 3.117l.144 1.446c.005.05.03.12.114.204.086.087.217.17.373.227.283.103.618.274.89.568.285.31.467.723.467 1.226v.75h1.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H4v-.75c0-.503.182-.916.468-1.226.27-.294.606-.465.889-.568.139-.048.266-.126.373-.227.084-.085.109-.153.114-.204l.144-1.446a5.015 5.015 0 0 1-2.77-3.117ZM4.5 1.568V5.5a3.5 3.5 0 1 0 7 0V1.568a.068.068 0 0 0-.068-.068H4.568a.068.068 0 0 0-.068.068Zm2.957 8.902-.12 1.204c-.093.925-.858 1.47-1.467 1.691a.766.766 0 0 0-.3.176c-.037.04-.07.093-.07.21v.75h5v-.75c0-.117-.033-.17-.07-.21a.766.766 0 0 0-.3-.176c-.609-.221-1.374-.766-1.466-1.69l-.12-1.204a5.064 5.064 0 0 1-1.087 0ZM13 2.5v2.872a2.25 2.25 0 0 0 1.5-2.122v-.5a.25.25 0 0 0-.25-.25H13Zm-10 0H1.75a.25.25 0 0 0-.25.25v.5c0 .98.626 1.813 1.5 2.122Z" />
                                            </svg>
                                            <p>Unlocked on Nov 30, 2025</p>
                                        </div>

                                        <div className="linkref">
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                width="16"
                                                className="icon dot"
                                            >
                                                <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
                                            </svg>
                                            <p>
                                                <a href="#" target="_blank" rel="noreferrer"></a>
                                                inaccessible · 2nd accepted answer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {openCard === 2 && (
                    <div className="background" id="card1">
                        <div className="boxpairextraordinaire">
                            <div className="boxsair" onClick={() => setOpenCard(null)}>
                                <i className="fa-solid fa-x"></i>
                            </div>

                            <div className="card">
                                <img
                                    src={PairExtraordinaire}
                                    loading="lazy"
                                    alt="Pair Brain badge"
                                />
                            </div>

                            <div className="info">
                                <div className="title">
                                    <h3>Pair Extraordinaire</h3>
                                    <p style={{ color: "snow" }}>
                                        @guilhermeteixeira01 coauthored commits on merged pull requests.
                                    </p>
                                </div>

                                <div className="link">
                                    <p>History</p>
                                    <br />

                                    <div className="timeline2">
                                        <div className="unlock">
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                width="16"
                                                className="icon trophy"
                                            >
                                                <path d="M3.217 6.962A3.75 3.75 0 0 1 0 3.25v-.5C0 1.784.784 1 1.75 1h1.356c.228-.585.796-1 1.462-1h6.864c.647 0 1.227.397 1.462 1h1.356c.966 0 1.75.784 1.75 1.75v.5a3.75 3.75 0 0 1-3.217 3.712 5.014 5.014 0 0 1-2.771 3.117l.144 1.446c.005.05.03.12.114.204.086.087.217.17.373.227.283.103.618.274.89.568.285.31.467.723.467 1.226v.75h1.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H4v-.75c0-.503.182-.916.468-1.226.27-.294.606-.465.889-.568.139-.048.266-.126.373-.227.084-.085.109-.153.114-.204l.144-1.446a5.015 5.015 0 0 1-2.77-3.117ZM4.5 1.568V5.5a3.5 3.5 0 1 0 7 0V1.568a.068.068 0 0 0-.068-.068H4.568a.068.068 0 0 0-.068.068Zm2.957 8.902-.12 1.204c-.093.925-.858 1.47-1.467 1.691a.766.766 0 0 0-.3.176c-.037.04-.07.093-.07.21v.75h5v-.75c0-.117-.033-.17-.07-.21a.766.766 0 0 0-.3-.176c-.609-.221-1.374-.766-1.466-1.69l-.12-1.204a5.064 5.064 0 0 1-1.087 0ZM13 2.5v2.872a2.25 2.25 0 0 0 1.5-2.122v-.5a.25.25 0 0 0-.25-.25H13Zm-10 0H1.75a.25.25 0 0 0-.25.25v.5c0 .98.626 1.813 1.5 2.122Z" />
                                            </svg>
                                            <p>Unlocked on Jul 30, 2025</p>
                                        </div>

                                        <div className="linkref">
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                width="16"
                                                className="icon dot"
                                            >
                                                <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
                                            </svg>
                                            <p>
                                                <a href="https://github.com/guilhermeteixeira01/minebrothers-web/pull/5"
                                                    target="_blank">guilhermeteixeira01/minebrothers-web#5</a> <span>·Coauthored with </span><span style={{ color: "snow" }}>@CaduTM</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {openCard === 3 && (
                    <div className="background" id="card1">
                        <div className="boxpullshark">
                            <div className="boxsair" onClick={() => setOpenCard(null)}>
                                <i className="fa-solid fa-x"></i>
                            </div>

                            <div className="card">
                                <img
                                    src={PullShark}
                                    loading="lazy"
                                    alt="Pull Shark badge"
                                />
                            </div>

                            <div className="info">
                                <div className="title">
                                    <h3>Pull Shark</h3>
                                    <p style={{ color: "snow" }}>
                                        @guilhermeteixeira01 opened pull requests that have been merged.
                                    </p>
                                </div>

                                <div className="link">
                                    <p>History</p>
                                    <br />

                                    <div className="timeline2">
                                        <div className="unlock">
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                width="16"
                                                className="icon trophy"
                                            >
                                                <path d="M3.217 6.962A3.75 3.75 0 0 1 0 3.25v-.5C0 1.784.784 1 1.75 1h1.356c.228-.585.796-1 1.462-1h6.864c.647 0 1.227.397 1.462 1h1.356c.966 0 1.75.784 1.75 1.75v.5a3.75 3.75 0 0 1-3.217 3.712 5.014 5.014 0 0 1-2.771 3.117l.144 1.446c.005.05.03.12.114.204.086.087.217.17.373.227.283.103.618.274.89.568.285.31.467.723.467 1.226v.75h1.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H4v-.75c0-.503.182-.916.468-1.226.27-.294.606-.465.889-.568.139-.048.266-.126.373-.227.084-.085.109-.153.114-.204l.144-1.446a5.015 5.015 0 0 1-2.77-3.117ZM4.5 1.568V5.5a3.5 3.5 0 1 0 7 0V1.568a.068.068 0 0 0-.068-.068H4.568a.068.068 0 0 0-.068.068Zm2.957 8.902-.12 1.204c-.093.925-.858 1.47-1.467 1.691a.766.766 0 0 0-.3.176c-.037.04-.07.093-.07.21v.75h5v-.75c0-.117-.033-.17-.07-.21a.766.766 0 0 0-.3-.176c-.609-.221-1.374-.766-1.466-1.69l-.12-1.204a5.064 5.064 0 0 1-1.087 0ZM13 2.5v2.872a2.25 2.25 0 0 0 1.5-2.122v-.5a.25.25 0 0 0-.25-.25H13Zm-10 0H1.75a.25.25 0 0 0-.25.25v.5c0 .98.626 1.813 1.5 2.122Z" />
                                            </svg>
                                            <p>Unlocked on Jul 30, 2025</p>
                                        </div>

                                        <div className="linkref">
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                width="16"
                                                className="icon dot"
                                            >
                                                <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
                                            </svg>
                                            <p>
                                                <p><a href="https://github.com/guilhermeteixeira01/minebrothers-web/pull/2"
                                                    target="_blank">guilhermeteixeira01/minebrothers-web#2</a> · 2nd pull request merged
                                                </p>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {openCard === 4 && (
                    <div className="background" id="card1">
                        <div className="boxquickdraw">
                            <div className="boxsair" onClick={() => setOpenCard(null)}>
                                <i className="fa-solid fa-x"></i>
                            </div>

                            <div className="card">
                                <img
                                    src={QuickDraw}
                                    loading="lazy"
                                    alt="QuickDraw badge"
                                />
                            </div>

                            <div className="info">
                                <div className="title">
                                    <h3>QuickDraw</h3>
                                    <p style={{ color: "snow" }}>Gitty up!</p>
                                </div>

                                <div className="link">
                                    <p>History</p>
                                    <br />

                                    <div className="timeline2">
                                        <div className="unlock">
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                width="16"
                                                className="icon trophy"
                                            >
                                                <path d="M3.217 6.962A3.75 3.75 0 0 1 0 3.25v-.5C0 1.784.784 1 1.75 1h1.356c.228-.585.796-1 1.462-1h6.864c.647 0 1.227.397 1.462 1h1.356c.966 0 1.75.784 1.75 1.75v.5a3.75 3.75 0 0 1-3.217 3.712 5.014 5.014 0 0 1-2.771 3.117l.144 1.446c.005.05.03.12.114.204.086.087.217.17.373.227.283.103.618.274.89.568.285.31.467.723.467 1.226v.75h1.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H4v-.75c0-.503.182-.916.468-1.226.27-.294.606-.465.889-.568.139-.048.266-.126.373-.227.084-.085.109-.153.114-.204l.144-1.446a5.015 5.015 0 0 1-2.77-3.117ZM4.5 1.568V5.5a3.5 3.5 0 1 0 7 0V1.568a.068.068 0 0 0-.068-.068H4.568a.068.068 0 0 0-.068.068Zm2.957 8.902-.12 1.204c-.093.925-.858 1.47-1.467 1.691a.766.766 0 0 0-.3.176c-.037.04-.07.093-.07.21v.75h5v-.75c0-.117-.033-.17-.07-.21a.766.766 0 0 0-.3-.176c-.609-.221-1.374-.766-1.466-1.69l-.12-1.204a5.064 5.064 0 0 1-1.087 0ZM13 2.5v2.872a2.25 2.25 0 0 0 1.5-2.122v-.5a.25.25 0 0 0-.25-.25H13Zm-10 0H1.75a.25.25 0 0 0-.25.25v.5c0 .98.626 1.813 1.5 2.122Z" />
                                            </svg>
                                            <p>
                                                <span style={{ color: "#58a6ff" }}>100% unlocked</span> · Unlocked on Jul 30, 2025
                                            </p>
                                        </div>

                                        <div className="linkref">
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                width="16"
                                                className="icon dot"
                                            >
                                                <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
                                            </svg>
                                            <p>
                                                <p style={{ fontSize: "0.84rem" }}><a href="https://github.com/guilhermeteixeira01/minebrothers-web/pull/3"
                                                    target="_blank">guilhermeteixeira01/minebrothers-web#3</a>· Closed within 5 minutes of opening
                                                </p>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {openCard === 5 && (
                    <div className="background" id="card1">
                        <div className="boxyolo">
                            <div className="boxsair" onClick={() => setOpenCard(null)}>
                                <i className="fa-solid fa-x"></i>
                            </div>

                            <div className="card">
                                <img
                                    src={Yolo}
                                    loading="lazy"
                                    alt="Yolo badge"
                                />
                            </div>

                            <div className="info">
                                <div className="title">
                                    <h3>Yolo</h3>
                                    <p style={{ color: "snow" }}> You want it? You merge it.</p>
                                </div>

                                <div className="link">
                                    <p>History</p>
                                    <br />

                                    <div className="timeline2">
                                        <div className="unlock">
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                width="16"
                                                className="icon trophy"
                                            >
                                                <path d="M3.217 6.962A3.75 3.75 0 0 1 0 3.25v-.5C0 1.784.784 1 1.75 1h1.356c.228-.585.796-1 1.462-1h6.864c.647 0 1.227.397 1.462 1h1.356c.966 0 1.75.784 1.75 1.75v.5a3.75 3.75 0 0 1-3.217 3.712 5.014 5.014 0 0 1-2.771 3.117l.144 1.446c.005.05.03.12.114.204.086.087.217.17.373.227.283.103.618.274.89.568.285.31.467.723.467 1.226v.75h1.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H4v-.75c0-.503.182-.916.468-1.226.27-.294.606-.465.889-.568.139-.048.266-.126.373-.227.084-.085.109-.153.114-.204l.144-1.446a5.015 5.015 0 0 1-2.77-3.117ZM4.5 1.568V5.5a3.5 3.5 0 1 0 7 0V1.568a.068.068 0 0 0-.068-.068H4.568a.068.068 0 0 0-.068.068Zm2.957 8.902-.12 1.204c-.093.925-.858 1.47-1.467 1.691a.766.766 0 0 0-.3.176c-.037.04-.07.093-.07.21v.75h5v-.75c0-.117-.033-.17-.07-.21a.766.766 0 0 0-.3-.176c-.609-.221-1.374-.766-1.466-1.69l-.12-1.204a5.064 5.064 0 0 1-1.087 0ZM13 2.5v2.872a2.25 2.25 0 0 0 1.5-2.122v-.5a.25.25 0 0 0-.25-.25H13Zm-10 0H1.75a.25.25 0 0 0-.25.25v.5c0 .98.626 1.813 1.5 2.122Z" />
                                            </svg>
                                            <p>
                                                <p2 style={{ color: "#58a6ff" }}>100% unlocked</p2> · Unlocked on Jul 30, 2025
                                            </p>
                                        </div>

                                        <div className="linkref">
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                width="16"
                                                className="icon dot"
                                            >
                                                <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
                                            </svg>
                                            <p>
                                                <p><a href="https://github.com/guilhermeteixeira01/minebrothers-web/pull/1"
                                                    target="_blank">guilhermeteixeira01/minebrothers-web#1</a> · Merged without a review
                                                </p>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {openCard === 6 && (
                    <div className="background" id="card1">
                        <div className="boxstarstruck">
                            <div className="boxsair" onClick={() => setOpenCard(null)}>
                                <i className="fa-solid fa-x"></i>
                            </div>

                            <div className="card">
                                <img
                                    src={StarStruck}
                                    loading="lazy"
                                    alt="StarsTruck badge"
                                />
                            </div>

                            <div className="info">
                                <div className="title">
                                    <h3>StarsTruck</h3>
                                    <p style={{ color: "snow" }}> @guilhermeteixeira01 created a repository that has many stars.</p>
                                </div>

                                <div className="link">
                                    <p>History</p>
                                    <br />

                                    <div className="timeline2">
                                        <div className="unlock">
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                width="16"
                                                className="icon trophy"
                                            >
                                                <path d="M3.217 6.962A3.75 3.75 0 0 1 0 3.25v-.5C0 1.784.784 1 1.75 1h1.356c.228-.585.796-1 1.462-1h6.864c.647 0 1.227.397 1.462 1h1.356c.966 0 1.75.784 1.75 1.75v.5a3.75 3.75 0 0 1-3.217 3.712 5.014 5.014 0 0 1-2.771 3.117l.144 1.446c.005.05.03.12.114.204.086.087.217.17.373.227.283.103.618.274.89.568.285.31.467.723.467 1.226v.75h1.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H4v-.75c0-.503.182-.916.468-1.226.27-.294.606-.465.889-.568.139-.048.266-.126.373-.227.084-.085.109-.153.114-.204l.144-1.446a5.015 5.015 0 0 1-2.77-3.117ZM4.5 1.568V5.5a3.5 3.5 0 1 0 7 0V1.568a.068.068 0 0 0-.068-.068H4.568a.068.068 0 0 0-.068.068Zm2.957 8.902-.12 1.204c-.093.925-.858 1.47-1.467 1.691a.766.766 0 0 0-.3.176c-.037.04-.07.093-.07.21v.75h5v-.75c0-.117-.033-.17-.07-.21a.766.766 0 0 0-.3-.176c-.609-.221-1.374-.766-1.466-1.69l-.12-1.204a5.064 5.064 0 0 1-1.087 0ZM13 2.5v2.872a2.25 2.25 0 0 0 1.5-2.122v-.5a.25.25 0 0 0-.25-.25H13Zm-10 0H1.75a.25.25 0 0 0-.25.25v.5c0 .98.626 1.813 1.5 2.122Z" />
                                            </svg>
                                            <p>
                                                Unlocked on Jan 29
                                            </p>
                                        </div>

                                        <div className="linkref">
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                width="16"
                                                className="icon dot"
                                            >
                                                <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
                                            </svg>
                                            <p>
                                                <p><a href="https://github.com/guilhermeteixeira01/calisthenic-leveling"
                                                    target="_blank">guilhermeteixeira01/calisthenic-leveling</a>
                                                    · ⭐️ 16 stars</p>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div
                    className="scroll-indicator"
                    onClick={scrollToNext}
                    style={{ opacity }}
                >
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                </div>
            </section >

            <section>

            </section>
        </>
    );
}