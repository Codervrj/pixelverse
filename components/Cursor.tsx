import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const Cursor: React.FC = () => {
  const [cursorState, setCursorState] = useState<'normal' | 'hover' | 'click'>('normal');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { stiffness: 1000, damping: 50 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setCursorState('click');
    const handleMouseUp = () => setCursorState('normal');

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest('button, a, .cursor-target')) {
        setCursorState('hover');
      } else {
        setCursorState('normal');
      }
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  const variants = {
    normal: {
      width: 24,
      height: 24,
      scale: 1,
      rotate: 0,
    },
    hover: {
      width: 56,
      height: 56,
      scale: 1.1,
      rotate: 90,
    },
    click: {
      width: 20,
      height: 20,
      scale: 0.8,
      rotate: 45,
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
      animate={cursorState}
      variants={variants}
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <div className="w-1 h-1 bg-[#FFD700] rounded-full shadow-[0_0_8px_#FFD700]" />

      {[
        "top-0 left-0 border-t-2 border-l-2",
        "top-0 right-0 border-t-2 border-r-2",
        "bottom-0 left-0 border-b-2 border-l-2",
        "bottom-0 right-0 border-b-2 border-r-2"
      ].map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 border-[#FFD700] ${pos} shadow-[0_0_5px_rgba(255,215,0,0.5)]`}
          animate={{
            padding: cursorState === 'hover' ? '2px' : '0px'
          }}
        />
      ))}

      <div className="absolute w-full h-[1px] bg-[#FFD700]/20" />
      <div className="absolute h-full w-[1px] bg-[#FFD700]/20" />
    </motion.div>
  );
};

export default Cursor;