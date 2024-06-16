import React, { useState, useEffect} from 'react';

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const trackMouse = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    //console.log(e)
  };

  useEffect(() => {
    const updateMousePosition = (e) => {
      trackMouse(e);
    };

    document.addEventListener('mousemove', updateMousePosition);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  

  return (
    
    <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
  );
};

export default MouseTracker;
