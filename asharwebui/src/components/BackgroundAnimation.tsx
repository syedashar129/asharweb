import { useEffect, useRef } from 'react';
import { useMantineTheme } from '@mantine/core';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
}

export function BackgroundAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const theme = useMantineTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let mouse = { x: -1000, y: -1000 };

        // Configuration
        const particleCount = window.innerWidth < 768 ? 40 : 80; // Fewer particles on mobile
        const connectionDistance = 150;
        const mouseDistance = 200;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5, // Slow velocity
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2 + 1,
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.forEach((particle, i) => {
                // Move
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Bounce off edges
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                // Mouse interaction
                const dxMouse = mouse.x - particle.x;
                const dyMouse = mouse.y - particle.y;
                const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distanceMouse < mouseDistance) {
                    const forceDirectionX = dxMouse / distanceMouse;
                    const forceDirectionY = dyMouse / distanceMouse;
                    const force = (mouseDistance - distanceMouse) / mouseDistance;
                    const directionX = forceDirectionX * force * 0.6;
                    const directionY = forceDirectionY * force * 0.6;

                    particle.vx -= directionX;
                    particle.vy -= directionY;
                }

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = theme.colors.blue[6]; // Use theme color
                ctx.globalAlpha = 0.3; // Semi-transparent
                ctx.fill();

                // Connect particles
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particle.x - particles[j].x;
                    const dy = particle.y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = theme.colors.gray[6];
                        ctx.globalAlpha = 0.1 * (1 - distance / connectionDistance); // Fade out with distance
                        ctx.lineWidth = 1;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(drawParticles);
        };

        // Initialize
        resizeCanvas();
        createParticles();
        drawParticles();

        // Event listeners
        const handleResize = () => {
            resizeCanvas();
            createParticles(); // Re-create to fit new bounds
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [theme.colors]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1, // Behind everything
                pointerEvents: 'none', // Don't block clicks
                background: 'transparent', // Let CSS background show through if needed
            }}
        />
    );
}
