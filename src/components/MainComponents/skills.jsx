import PawnIcon from '../../img/icons/Pawn.png';

export default function skills() {
    return (
        <section id="skills" className="second-section">
            <h1 data-aos="flip-up" data-aos-duration="1500">Habilidades</h1>
            <div className="skills-container">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" data-aos="fade-up" data-aos-duration="1500" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" data-aos="fade-down" data-aos-duration="1500" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" data-aos="fade-up" data-aos-duration="1500" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" data-aos="fade-down" data-aos-duration="1500" />
                <img src={PawnIcon} alt="Pawn" data-aos="fade-down" data-aos-duration="1500" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" data-aos="fade-up" data-aos-duration="1500" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" data-aos="fade-up" data-aos-duration="1500" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" data-aos="fade-up" data-aos-duration="1500" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" data-aos="fade-down" data-aos-duration="1500" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VSCode" data-aos="fade-up" data-aos-duration="1500" />
            </div>
        </section>
    );
}