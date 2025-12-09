import { useEffect, useState, useRef } from 'react';
import { useMantineColorScheme } from '@mantine/core';
import classes from './MagnifyingGlass.module.css';

export function MagnifyingGlass() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const rafRef = useRef<number | null>(null);
    const lastUpdateRef = useRef<number>(0);
    const { colorScheme } = useMantineColorScheme();
    const isDark = colorScheme === 'dark';

    useEffect(() => {
        // Throttle to ~60fps for performance
        const throttleMs = 16;

        const updatePosition = (e: MouseEvent) => {
            const now = performance.now();
            if (now - lastUpdateRef.current < throttleMs) {
                return;
            }
            lastUpdateRef.current = now;

            // Check if hovering over interactive elements
            const target = e.target as HTMLElement;
            const isInteractive = target.closest('button, a, [role="button"], [class*="Card"], [class*="Badge"]');
            
            // Cancel previous frame if pending
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
            }

            // Use RAF for smooth updates
            rafRef.current = requestAnimationFrame(() => {
                setPosition({ x: e.clientX, y: e.clientY });
                setIsVisible(true);
                setIsHovering(!!isInteractive);
            });
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
            setIsHovering(false);
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
            }
        };

        // Use passive listener for better performance
        window.addEventListener('mousemove', updatePosition, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            document.removeEventListener('mouseleave', handleMouseLeave);
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    return (
        <div
            className={`${classes.magnifyingGlass} ${isVisible ? classes.visible : ''} ${isHovering ? classes.hovering : ''} ${isDark ? classes.dark : ''}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
}

