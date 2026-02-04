import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <header className={menuOpen ? "active" : ""}>
                <div className="logodiv">
                    <h1 className="Title" data-aos="flip-left">Mimo & Arte</h1>
                </div>

                <div className="btns" data-aos="flip-left">
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

                        {/* Menu com links */}
                        {menuOpen && (
                            <ul className="MenuOptions">
                                <li><a href="#home" onClick={() => setMenuOpen(false)}>Início</a></li>
                                <li><a href="#home" onClick={() => setMenuOpen(false)}>...</a></li>
                                <li><a href="#home" onClick={() => setMenuOpen(false)}>...</a></li>
                                <li><a href="#home" onClick={() => setMenuOpen(false)}>...</a></li>
                            </ul>
                        )}
                    </div>
                </div>
            </header>
        </>
    );
}