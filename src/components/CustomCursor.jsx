import { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const moveCursor = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        };

        const handleMouseOver = (e) => {
            const isInteractive = e.target.closest('a, button, input, select, textarea, [role="button"], .clickable');
            if (isInteractive) {
                cursor.classList.add('hovered');
            } else {
                cursor.classList.remove('hovered');
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return <div ref={cursorRef} className="custom-cursor"></div>;
};

export default CustomCursor;
