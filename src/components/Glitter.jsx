export function initGlitter(canvas) {
    const ctx = canvas.getContext("2d");

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const GLITTER_COUNT = 500;

    const glitters = Array.from({ length: GLITTER_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 0.9 + 0.2,
        alpha: Math.random(),
        flicker: Math.random() * 0.04 + 0.015,
        driftX: (Math.random() - 0.5) * 0.1,
        driftY: Math.random() * 0.25 + 0.05,
        hue: Math.random() * 360,
        hueSpeed: Math.random() * 0.4 + 0.2
    }));

    let animationId;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        glitters.forEach(g => {
            g.x += g.driftX;
            g.y += g.driftY;

            if (g.y > canvas.height) g.y = 0;
            if (g.x > canvas.width) g.x = 0;
            if (g.x < 0) g.x = canvas.width;

            g.alpha += g.flicker;
            if (g.alpha <= 0.15 || g.alpha >= 1) g.flicker *= -1;

            g.hue = (g.hue + g.hueSpeed) % 360;

            // brilho holográfico
            const gradient = ctx.createRadialGradient(
                g.x, g.y, 0,
                g.x, g.y, g.r * 4
            );

            gradient.addColorStop(0, `hsla(${g.hue}, 100%, 85%, ${g.alpha})`);
            gradient.addColorStop(0.5, `hsla(${g.hue + 40}, 100%, 70%, ${g.alpha * 0.6})`);
            gradient.addColorStop(1, `hsla(${g.hue + 80}, 100%, 60%, 0)`);

            ctx.beginPath();
            ctx.arc(g.x, g.y, g.r * 3, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
        });

        animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", resize);
    };
}
