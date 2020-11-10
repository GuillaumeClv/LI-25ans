import React, { memo, useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

export default memo(function Canvas (props) {
  const canvasRef = useRef(null)
  const { innerWidth: width, innerHeight: height } = window;

  useEffect(() => {
      let duration = 7000;
      let animationEnd = Date.now() + duration;
      let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min, max) => Math.random() * (max - min) + min;

      let interval = setInterval(function() {
        let timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        let particleCount = 50 * (timeLeft / duration);

        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);
  },
  [])

  return (
    <canvas 
      id="canvasID" 
      ref={canvasRef} 
      {...props}
      width={width} 
      height={height}
    /> 
  )
})