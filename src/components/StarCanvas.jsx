import React, { useEffect, useRef, useState } from "react";
import { initStars } from "./stars";
import SonicGold from "../img/super-sonic.gif";

export default function StarCanvas() {
    const canvasRef = useRef(null);
    const [canvasSize, setCanvasSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [sonics, setSonics] = useState([]); // lista de sonics ativos

    // Inicializa as estrelas
    useEffect(() => {
        const cleanup = initStars(canvasRef.current);

        function handleResize() {
            setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener("resize", handleResize);

        return () => {
            cleanup();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Função para criar um novo Sonic
    function createSonic() {
        return {
            id: Date.now() + Math.random(),
            x: -10, // começa fora da tela
            y: Math.random() * canvasSize.height * 0.7,
            speed: 1 + Math.random() * 2, // velocidade lenta e natural
            size: 30 + Math.random() * 50, // tamanho aleatório entre 30px e 80px
        };
    }


    useEffect(() => {
        setSonics([createSonic()]);

        const interval = setInterval(() => {
            setSonics(prev => [...prev, createSonic()]);
        }, 15000);

        return () => clearInterval(interval);
    }, [canvasSize]);

    // Animação dos Sonics
    useEffect(() => {
        let requestId;

        function animate() {
            setSonics(prev =>
                prev
                    .map(s => ({ ...s, x: s.x + s.speed }))
                    .filter(s => s.x < canvasSize.width + s.size)
            );

            requestId = requestAnimationFrame(animate);
        }

        animate();

        return () => cancelAnimationFrame(requestId);
    }, [canvasSize]);

    return (
        <div style={{ position: "absolute", width: "100vw", height: "100vh", overflow: "hidden" }}>
            <canvas ref={canvasRef} style={{ display: "block", position: "absolute", top: 0, left: 0, zIndex: -1 }} />

            {sonics.map(s => (
                <img
                    key={s.id}
                    src={SonicGold}
                    alt="Sonic"
                    style={{
                        position: "absolute",
                        left: s.x,
                        top: s.y,
                        width: `${s.size}px`,
                        height: `${s.size}px`,
                        zIndex: -1,
                        pointerEvents: "none",
                        transition: "transform 0.1s linear",
                    }}
                />
            ))}
        </div>
    );
}
