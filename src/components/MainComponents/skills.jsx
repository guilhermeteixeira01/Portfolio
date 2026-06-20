import { PawnIcon } from "../../constants/constants";

export default function skills() {
    return (
        <section id="skills" className="second-section">
            <h1 data-aos="flip-up" data-aos-duration="1500">Habilidades</h1>
            <div className="skills-container">
                <div className="key" data-aos="fade-up" data-aos-duration="1500">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" />
                </div>
                <div className="key" data-aos="fade-down" data-aos-duration="1500">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" />
                </div>
                <div className="key" data-aos="fade-up" data-aos-duration="1500">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
                </div>
                <div className="key" data-aos="fade-down" data-aos-duration="1500">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                </div>
                <div className="key" data-aos="fade-down" data-aos-duration="1500">
                    <img src={PawnIcon} alt="Pawn" />
                </div>
                <div className="key" data-aos="fade-up" data-aos-duration="1500">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                </div>
                <div className="key" data-aos="fade-up" data-aos-duration="1500">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" />
                </div>
                <div className="key" data-aos="fade-up" data-aos-duration="1500">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" />
                </div>
                <div className="key" data-aos="fade-down" data-aos-duration="1500">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" />
                </div>
                <div className="key" data-aos="fade-up" data-aos-duration="1500">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VSCode" />
                </div>
            </div>
        </section>
    );
}