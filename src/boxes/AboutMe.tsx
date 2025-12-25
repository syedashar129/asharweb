// make it blue gradient with animated techy background
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function AboutMe() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                setMousePosition({ x, y });
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
            return () => container.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    // Animated grid/circuit pattern on canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                canvas.width = rect.width;
                canvas.height = rect.height;
            }
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        let animationFrame: number;
        let time = 0;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.01;

            // Grid pattern
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
            ctx.lineWidth = 1;
            const gridSize = 30;

            for (let x = 0; x < canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            // Animated circuit lines
            ctx.strokeStyle = 'rgba(96, 165, 250, 0.4)';
            ctx.lineWidth = 2;
            
            const points = [
                { x: 0, y: canvas.height / 2 },
                { x: canvas.width / 4, y: canvas.height / 4 },
                { x: canvas.width / 2, y: canvas.height / 2 },
                { x: (canvas.width * 3) / 4, y: (canvas.height * 3) / 4 },
                { x: canvas.width, y: canvas.height / 2 },
            ];

            for (let i = 0; i < points.length - 1; i++) {
                const offset = Math.sin(time + i) * 10;
                ctx.beginPath();
                ctx.moveTo(points[i].x + offset, points[i].y + offset);
                ctx.lineTo(points[i + 1].x + offset, points[i + 1].y + offset);
                ctx.stroke();
            }

            // Pulsing nodes at grid intersections
            ctx.fillStyle = 'rgba(96, 165, 250, 0.6)';
            for (let x = gridSize; x < canvas.width; x += gridSize * 2) {
                for (let y = gridSize; y < canvas.height; y += gridSize * 2) {
                    const pulse = (Math.sin(time * 2 + x * 0.01 + y * 0.01) + 1) / 2;
                    ctx.beginPath();
                    ctx.arc(x, y, 2 + pulse * 2, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            animationFrame = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ 
                scale: 1.02,
                boxShadow: isHovered ? "0 20px 60px rgba(59, 130, 246, 0.6)" : "0 20px 60px rgba(59, 130, 246, 0.4)"
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-blue-800 to-slate-900 p-8 shadow-2xl cursor-pointer border border-blue-700/30"
        >
            {/* Animated canvas with tech grid */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-60"
            />

            {/* Mouse-following radial gradient */}
            <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.8), rgba(14, 165, 233, 0.4), transparent 70%)`,
                }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />
            
            {/* Animated scan line effect */}
            <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                    background: 'linear-gradient(to bottom, transparent, rgba(96, 165, 250, 0.3), transparent)',
                    height: '2px',
                }}
                animate={{
                    y: [0, '100%', 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Floating tech particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-400/30 blur-lg"
                        style={{
                            width: `${15 + i * 10}px`,
                            height: `${15 + i * 10}px`,
                            left: `${5 + i * 12}%`,
                            top: `${5 + i * 8}%`,
                        }}
                        animate={{
                            x: [0, 40, 0],
                            y: [0, 30, 0],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.4,
                        }}
                    />
                ))}
            </div>

            {/* Corner accent lines */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-400/50" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-blue-400/50" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-blue-400/50" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-blue-400/50" />

            {/* Content */}
            <div className="relative z-10">
                <h1 className="text-2xl font-bold text-white mb-2">About Me</h1>
                <p className="text-sm text-white/90">I am a software engineer with a passion for building web applications.</p>
            </div>
        </motion.div>
    );
}