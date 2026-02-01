export function initStars(canvas) {
    const ctx = canvas.getContext("2d");

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const STAR_COUNT = 300;

    const colors = ["#ffffff", "#ffe9c4", "#d4fbff", "#ffb3ff", "#c4f0ff"];

    const stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        speed: Math.random() * 0.3 + 0.05, // velocidade horizontal
        alpha: Math.random(),
        twinkle: Math.random() * 0.02 + 0.005,
        color: colors[Math.floor(Math.random() * colors.length)]
    }));

    let animationId;

    function drawStar(s) {
        const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3);
        gradient.addColorStop(0, s.color);
        gradient.addColorStop(0.3, s.color + "80");
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2);
        ctx.fill();
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach(s => {
            // movimento da direita para a esquerda
            s.x -= s.speed;
            if (s.x < 0) {
                s.x = canvas.width;
                s.y = Math.random() * canvas.height;
            }

            // brilho/piscada
            s.alpha += s.twinkle;
            if (s.alpha <= 0.2 || s.alpha >= 1) s.twinkle *= -1;

            ctx.globalAlpha = s.alpha;
            drawStar(s);
        });

        ctx.globalAlpha = 1;
        animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", resize);
    };
}
