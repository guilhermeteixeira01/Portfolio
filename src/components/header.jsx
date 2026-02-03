import { useState, useEffect } from "react";

export default function Header({ username = "guilhermeteixeira01", repo = "Portfolio" }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [stars, setStars] = useState(0);

    useEffect(() => {
        fetch(`https://api.github.com/repos/${username}/${repo}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.stargazers_count !== undefined) {
                    setStars(data.stargazers_count);
                }
            })
            .catch((err) => {
                console.error("Erro ao buscar estrelas do GitHub:", err);
            });
    }, [username, repo]);


    useEffect(() => {
        if (!isDarkMode) {
            document.documentElement.style.setProperty('--color-galaxy1', '#cfcfcf 0%');
            document.documentElement.style.setProperty('--color-galaxy2', '#090a0f 100%');
        } else {
            document.documentElement.style.setProperty('--color-galaxy1', '#1b2735 0%');
            document.documentElement.style.setProperty('--color-galaxy2', '#090a0f 100%');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <>
            <header>
                <div className="logodiv">
                    <h1 className="Title" data-aos="flip-left">Guilherme Teixeira</h1>
                </div>

                <div className="btns" data-aos="flip-left">
                    <div className="switch">
                        <input
                            className="switchinput"
                            type="checkbox"
                            id="toggleDarkModeButton"
                            checked={!isDarkMode} // controla o estado
                            onChange={toggleDarkMode} // chama a função no clique
                        />

                        <label className="switchlabel" htmlFor="toggleDarkModeButton">
                            <svg className="lua" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M3.39703 11.6315C3.39703 16.602 7.42647 20.6315 12.397 20.6315C15.6858 20.6315 18.5656 18.8664 20.1358 16.23C16.7285 17.3289 12.6922 16.7548 9.98282 14.0455C7.25201 11.3146 6.72603 7.28415 7.86703 3.89293C5.20697 5.47927 3.39703 8.38932 3.39703 11.6315ZM21.187 13.5851C22.0125 13.1021 23.255 13.6488 23 14.5706C21.7144 19.2187 17.4543 22.6315 12.397 22.6315C6.3219 22.6315 1.39703 17.7066 1.39703 11.6315C1.39703 6.58874 4.93533 2.25845 9.61528 0.999986C10.5393 0.751502 11.0645 1.99378 10.5641 2.80935C8.70026 5.84656 8.83194 10.0661 11.397 12.6312C13.9319 15.1662 18.1365 15.3702 21.187 13.5851Z" />
                            </svg>
                            <svg className="sol" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 17.75C10.8628 17.75 9.75106 17.4128 8.80547 16.781C7.85989 16.1491 7.1229 15.2511 6.6877 14.2004C6.25249 13.1498 6.13862 11.9936 6.36049 10.8782C6.58235 9.76284 7.12999 8.73829 7.93414 7.93414C8.73829 7.12999 9.76284 6.58235 10.8782 6.36049C11.9936 6.13862 13.1498 6.25249 14.2004 6.6877C15.2511 7.1229 16.1491 7.85989 16.781 8.80547C17.4128 9.75106 17.75 10.8628 17.75 12C17.7474 13.5242 17.1407 14.9852 16.0629 16.0629C14.9852 17.1407 13.5242 17.7474 12 17.75ZM12 7.75C11.1594 7.75 10.3377 7.99926 9.63883 8.46626C8.93992 8.93325 8.39519 9.59701 8.07351 10.3736C7.75184 11.1502 7.66768 12.0047 7.83167 12.8291C7.99565 13.6536 8.40043 14.4108 8.9948 15.0052C9.58917 15.5996 10.3464 16.0044 11.1709 16.1683C11.9953 16.3323 12.8498 16.2482 13.6264 15.9265C14.403 15.6048 15.0668 15.0601 15.5337 14.3612C16.0007 13.6623 16.25 12.8406 16.25 12C16.2474 10.8736 15.7987 9.79417 15.0023 8.99772C14.2058 8.20126 13.1264 7.75264 12 7.75Z" />
                                <path
                                    d="M12 5C11.8019 4.99741 11.6126 4.91756 11.4725 4.77747C11.3324 4.63737 11.2526 4.44811 11.25 4.25V2.75C11.25 2.55109 11.329 2.36032 11.4697 2.21967C11.6103 2.07902 11.8011 2 12 2C12.1989 2 12.3897 2.07902 12.5303 2.21967C12.671 2.36032 12.75 2.55109 12.75 2.75V4.25C12.7474 4.44811 12.6676 4.63737 12.5275 4.77747C12.3874 4.91756 12.1981 4.99741 12 5Z" />
                                <path
                                    d="M12 22C11.8019 21.9974 11.6126 21.9176 11.4725 21.7775C11.3324 21.6374 11.2526 21.4481 11.25 21.25V19.75C11.25 19.5511 11.329 19.3603 11.4697 19.2197C11.6103 19.079 11.8011 19 12 19C12.1989 19 12.3897 19.079 12.5303 19.2197C12.671 19.3603 12.75 19.5511 12.75 19.75V21.25C12.7474 21.4481 12.6676 21.6374 12.5275 21.7775C12.3874 21.9176 12.1981 21.9974 12 22Z" />
                                <path
                                    d="M21.25 12.75H19.75C19.5511 12.75 19.3603 12.671 19.2197 12.5303C19.079 12.3897 19 12.1989 19 12C19 11.8011 19.079 11.6103 19.2197 11.4697C19.3603 11.329 19.5511 11.25 19.75 11.25H21.25C21.4489 11.25 21.6397 11.329 21.7803 11.4697C21.921 11.6103 22 11.8011 22 12C22 12.1989 21.921 12.3897 21.7803 12.5303C21.6397 12.671 21.4489 12.75 21.25 12.75Z" />
                                <path
                                    d="M4.25 12.75H2.75C2.55109 12.75 2.36032 12.671 2.21967 12.5303C2.07902 12.3897 2 12.1989 2 12C2 11.8011 2.07902 11.6103 2.21967 11.4697C2.36032 11.329 2.55109 11.25 2.75 11.25H4.25C4.44891 11.25 4.63968 11.329 4.78033 11.4697C4.92098 11.6103 5 11.8011 5 12C5 12.1989 4.92098 12.3897 4.78033 12.5303C4.63968 12.671 4.44891 12.75 4.25 12.75Z" />
                                <path
                                    d="M6.50001 7.24995C6.30707 7.2352 6.12758 7.14545 6.00001 6.99995L4.91001 5.99995C4.83844 5.92838 4.78167 5.84341 4.74293 5.7499C4.7042 5.65639 4.68427 5.55617 4.68427 5.45495C4.68427 5.35373 4.7042 5.25351 4.74293 5.16C4.78167 5.06649 4.83844 4.98152 4.91001 4.90995C4.98158 4.83838 5.06655 4.78161 5.16006 4.74287C5.25357 4.70414 5.3538 4.6842 5.45501 4.6842C5.55623 4.6842 5.65645 4.70414 5.74996 4.74287C5.84347 4.78161 5.92844 4.83838 6.00001 4.90995L7.00001 5.99995C7.123 6.13746 7.19099 6.31547 7.19099 6.49995C7.19099 6.68443 7.123 6.86244 7.00001 6.99995C6.87244 7.14545 6.69295 7.2352 6.50001 7.24995Z" />
                                <path
                                    d="M18.56 19.31C18.4615 19.3104 18.3638 19.2912 18.2728 19.2534C18.1818 19.2157 18.0993 19.1601 18.03 19.09L17 18C16.9332 17.86 16.9114 17.7028 16.9376 17.5499C16.9638 17.3971 17.0368 17.2561 17.1465 17.1464C17.2561 17.0368 17.3971 16.9638 17.55 16.9376C17.7028 16.9113 17.8601 16.9331 18 17L19.09 18C19.2305 18.1406 19.3094 18.3312 19.3094 18.53C19.3094 18.7287 19.2305 18.9194 19.09 19.06C19.0233 19.1355 18.9419 19.1967 18.8508 19.2397C18.7597 19.2827 18.6607 19.3066 18.56 19.31Z" />
                                <path
                                    d="M17.5 7.24995C17.3071 7.2352 17.1276 7.14545 17 6.99995C16.877 6.86244 16.809 6.68443 16.809 6.49995C16.809 6.31547 16.877 6.13746 17 5.99995L18 4.90995C18.1445 4.76541 18.3406 4.6842 18.545 4.6842C18.7494 4.6842 18.9455 4.76541 19.09 4.90995C19.2345 5.05449 19.3158 5.25054 19.3158 5.45495C19.3158 5.65936 19.2345 5.85541 19.09 5.99995L18 6.99995C17.8724 7.14545 17.6929 7.2352 17.5 7.24995Z" />
                                <path
                                    d="M5.44001 19.31C5.34147 19.3104 5.24383 19.2912 5.15282 19.2534C5.06181 19.2157 4.97926 19.1601 4.91001 19.09C4.76956 18.9494 4.69067 18.7587 4.69067 18.56C4.69067 18.3612 4.76956 18.1706 4.91001 18.03L6.00001 17C6.13997 16.9331 6.2972 16.9113 6.45006 16.9376C6.60293 16.9638 6.7439 17.0368 6.85357 17.1464C6.96324 17.2561 7.03621 17.3971 7.06244 17.5499C7.08866 17.7028 7.06685 17.86 7.00001 18L6.00001 19.09C5.92728 19.1638 5.83985 19.2216 5.74338 19.2595C5.64691 19.2974 5.54356 19.3146 5.44001 19.31Z" />
                            </svg>
                        </label>
                    </div>

                    <button
                        className="Githubstar"
                        onClick={() => window.open(`https://github.com/${username}/${repo}`, "_blank")}
                    >
                        <span className="icon github">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fill="currentColor"
                                    d="M12 .5C5.73.5.5 5.74.5 12.04c0 5.11 3.29 9.44 7.86 10.97.57.11.78-.25.78-.56v-2.17c-3.2.7-3.87-1.38-3.87-1.38-.53-1.35-1.29-1.71-1.29-1.71-1.06-.74.08-.73.08-.73 1.17.08 1.79 1.21 1.79 1.21 1.04 1.8 2.73 1.28 3.4.98.11-.76.41-1.28.74-1.57-2.55-.3-5.23-1.29-5.23-5.74 0-1.27.45-2.3 1.2-3.12-.12-.3-.52-1.5.11-3.12 0 0 .98-.32 3.2 1.19a11 11 0 0 1 5.83 0c2.22-1.51 3.2-1.19 3.2-1.19.63 1.62.23 2.82.11 3.12.75.82 1.2 1.85 1.2 3.12 0 4.46-2.69 5.43-5.25 5.72.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.79.56A11.55 11.55 0 0 0 23.5 12.04C23.5 5.74 18.27.5 12 .5z"
                                />
                            </svg>
                        </span>
                        <span className="label">{stars}</span>
                        <span className="icon star">★</span>
                    </button>

                    <div className="MenuContainer">
                        <button
                            className={`MenuBtn ${menuOpen ? "active" : ""}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Menu"
                        >
                            <span className="label">Menu</span>

                            <span className="icon icon-open">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M3 6h18M3 12h18M3 18h18"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>

                            <span className="icon icon-close">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M6 6l12 12M18 6l-12 12"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </button>

                        {/* Camada de fundo para blur */}
                        {<div className={`MenuBackdrop ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)} />}

                        {/* Menu com links */}
                        {menuOpen && (
                            <ul className="MenuOptions">
                                <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                                <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                                <li><a href="#project" onClick={() => setMenuOpen(false)}>Projects</a></li>
                                <li><a href="#" onClick={() => setMenuOpen(false)}>...</a></li>
                            </ul>
                        )}
                    </div>
                </div>
            </header>
            <iframe data-testid="embed-iframe" className="BoxSpotify" src="https://open.spotify.com/embed/playlist/7fMmNMr76FUtDe4HSAnN4m?utm_source=generator&theme=0" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </>
    );
}