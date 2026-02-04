import { useEffect, useState } from "react";

import LogoMimo from "../../img/Logo.jpg";
import stitch from "../../img/stitch.webp"

export default function Home() {
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
        <section id="home" className="first-section">
            <div className="My">
                <div className="boxname">
                    <img src={stitch} alt="Stitch" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" />
                    <h3 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">Olá, bem vindo</h3>
                </div>
                <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="550">Mimo & Arte</h1>
                <h4 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">Personalizados feitos com carinho ❤</h4>

                <div className="boxbuttons">
                    <div className="midiasocial">
                        <button className="iconBtn hireme" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500">contrate-me</button>
                        <button className="iconBtn instagram" aria-label="Instagram" onClick={() => window.open("https://www.instagram.com/atelie.mimoearte/", "_blank")} data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.75-.88a1.12 1.12 0 1 0 0 2.25 1.12 1.12 0 0 0 0-2.25z" />
                            </svg>
                        </button>

                        <button className="iconBtn whatsapp" aria-label="Whatsapp" onClick={() => window.open("", "_blank")} data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                                <path d="M20.52 3.48A11.82 11.82 0 0 0 12.01 0C5.39 0 .02 5.37.02 11.99c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62a11.93 11.93 0 0 0 5.83 1.49h.01c6.62 0 12-5.37 12-11.99 0-3.2-1.25-6.21-3.5-8.4zm-8.51 18.3a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.67.96.98-3.58-.23-.37a9.94 9.94 0 1 1 8.33 4.59zm5.45-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.34.45-.5.15-.17.2-.29.3-.48.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.89 1.23 3.09.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="box">
                <img src={LogoMimo} className="Perfil" data-aos="zoom-out" data-aos-duration="1500" alt="Perfil" />
            </div>

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
    );
}