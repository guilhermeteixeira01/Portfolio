import GalaxyBrain from "../img/Achievements Github/galaxy-brain.png";
import PairExtraordinaire from "../img/Achievements Github/pair-extraordinaire.png"
import PullShark from "../img/Achievements Github/pull-shark.png"
import QuickDraw from "../img/Achievements Github/quickdraw.png"
import Yolo from "../img/Achievements Github/yolo.png"
import StarStruck from "../img/Achievements Github/StarStruck.png"

export default function Main() {
    return (
        <section>
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
                        <img src={GalaxyBrain} />
                        <img src={PairExtraordinaire} />
                        <img src={PullShark} />
                        <img src={QuickDraw} />
                        <img src={Yolo} />
                        <img src={StarStruck} />
                    </div>
                </div>
            </div>
        </section>
    );

}