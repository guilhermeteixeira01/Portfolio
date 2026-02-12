import React, { useEffect, useRef, useState, useCallback } from "react";
import { initStars } from "./stars";
import SonicGold from "../img/super-sonic.gif";

export default function StarCanvas() {
    const canvasRef = useRef(null);
    const [canvasSize, setCanvasSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const [sonics, setSonics] = useState([]);

    // ✅ createSonic NÃO depende mais de canvasSize
    const createSonic = useCallback((height) => {
        return {
            id: Date.now() + Math.random(),
            x: -60,
            y: Math.random() * height * 0.7,
            speed: 1 + Math.random() * 2,
            size: 30 + Math.random() * 50,
        };
    }, []);

    // 🌌 Estrelas + resize
    useEffect(() => {
        const cleanup = initStars(canvasRef.current);

        function handleResize() {
            setCanvasSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener("resize", handleResize);

        return () => {
            cleanup();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // 🦔 Spawn de Sonics
    useEffect(() => {
        setSonics([createSonic(window.innerHeight)]);

        const interval = setInterval(() => {
            setSonics(prev => [...prev, createSonic(window.innerHeight)]);
        }, 15000);

        return () => clearInterval(interval);
    }, [createSonic]);

    // 🎬 Animação (RODA APENAS UMA VEZ)
    useEffect(() => {
        let requestId;

        function animate() {
            setSonics(prev =>
                prev
                    .map(s => ({ ...s, x: s.x + s.speed }))
                    .filter(s => s.x < window.innerWidth + s.size)
            );

            requestId = requestAnimationFrame(animate);
        }

        requestId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(requestId);
    }, []);

    return (
        <div style={{ position: "absolute", marginTop: 80, width: "100vw", height: "90vh", overflow: "hidden" }}>
            <canvas
                ref={canvasRef}
                width={canvasSize.width}
                height={canvasSize.height}
                style={{ position: "absolute", inset: 0, zIndex: -1 }}
            />

            {sonics.map(s => (
                <img
                    key={s.id}
                    src={SonicGold}
                    alt="Sonic"
                    style={{
                        position: "absolute",
                        transform: `translate(${s.x}px, ${s.y}px)`,
                        width: s.size,
                        height: s.size,
                        zIndex: -1,
                        pointerEvents: "none",
                        willChange: "transform",
                    }}
                />
            ))}
        </div>
    );
}