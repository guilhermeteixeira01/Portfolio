import PawnIcon from '../../img/icons/Pawn.png';

export default function skills() {
    return (
        <section id="skills" className="second-section">
            <h1 data-aos="flip-up" data-aos-duration="1500">Tech Stack</h1>
            <div className="skills-container">
                <img src="https://skillicons.dev/icons?i=html&theme=dark&size=32" alt="HTML" data-aos="fade-up" data-aos-duration="1500" />
                <img src="https://skillicons.dev/icons?i=css&theme=dark&size=32" alt="CSS" data-aos="fade-down" data-aos-duration="1500" />
                <img src="https://skillicons.dev/icons?i=js&theme=dark&size=32" alt="JavaScript" data-aos="fade-up" data-aos-duration="1500" />
                <img src="https://skillicons.dev/icons?i=react&theme=dark&size=32" alt="React" data-aos="fade-down" data-aos-duration="1500" />
                <img src="https://skillicons.dev/icons?i=git&theme=dark&size=32" alt="Git" data-aos="fade-up" data-aos-duration="1500" />
                <img src="https://skillicons.dev/icons?i=github&theme=dark&size=32" alt="GitHub" data-aos="fade-down" data-aos-duration="1500" />
                <img src="https://skillicons.dev/icons?i=cpp&theme=dark&size=32" alt="C++" data-aos="fade-up" data-aos-duration="1500" />
                <img src={PawnIcon} alt="Pawn" data-aos="fade-down" data-aos-duration="1500" />
                <img src="https://skillicons.dev/icons?i=vscode&theme=dark&size=32" alt="VSCode" data-aos="fade-up" data-aos-duration="1500" />
                <img src="https://skillicons.dev/icons?i=discord&theme=dark&size=32" alt="Discord" data-aos="fade-down" data-aos-duration="1500" />
                <img src="https://skillicons.dev/icons?i=nodejs&theme=dark&size=32" alt="Node.js" data-aos="fade-up" data-aos-duration="1500" />
                <img src="https://skillicons.dev/icons?i=py&theme=dark&size=32" alt="Python" data-aos="fade-down" data-aos-duration="1500" />
                <img src="https://skillicons.dev/icons?i=java&theme=dark&size=32" alt="Java" data-aos="fade-up" data-aos-duration="1500" />
                <img src="https://skillicons.dev/icons?i=figma&theme=dark&size=32" alt="Figma" data-aos="fade-down" data-aos-duration="1500" />
                <img src="https://skillicons.dev/icons?i=mysql&theme=dark&size=32" alt="MySQL" data-aos="fade-up" data-aos-duration="1500" />
            </div>
        </section>
    );
}