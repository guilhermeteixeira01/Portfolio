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

    // ✅ createSonic memorizado
    const createSonic = useCallback(() => {
        return {
            id: Date.now() + Math.random(),
            x: -10,
            y: Math.random() * canvasSize.height * 0.7,
            speed: 1 + Math.random() * 2,
            size: 30 + Math.random() * 50,
        };
    }, [canvasSize]);

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
        setSonics([createSonic()]);

        const interval = setInterval(() => {
            setSonics(prev => [...prev, createSonic()]);
        }, 15000);

        return () => clearInterval(interval);
    }, [createSonic]);

    // 🎬 Animação
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
            <canvas
                ref={canvasRef}
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
