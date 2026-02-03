export function initStars(canvas) {
    const ctx = canvas.getContext("2d");

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const STAR_COUNT = 300;

    const stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.2,
        speed: Math.random() * 0.15 + 0.05,
        alpha: Math.random(),
        twinkle: Math.random() * 0.02 + 0.005
    }));

    let animationId;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const rootStyles = getComputedStyle(document.documentElement);
        const starColor = rootStyles.getPropertyValue('--star-color').trim() || "#ffffff";

        stars.forEach(s => {
            s.y += s.speed;
            if (s.y > canvas.height) {
                s.y = 0;
                s.x = Math.random() * canvas.width;
            }

            s.alpha += s.twinkle;
            if (s.alpha <= 0.2 || s.alpha >= 1) s.twinkle *= -1;

            ctx.globalAlpha = s.alpha;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = starColor;
            ctx.fill();
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
