import { useState, useEffect } from 'react';
import Lottie from 'react-lottie';  // facilitates animation
import animationData from 'assets/animations/logoAnimationData.json';  // contains animation data


function AnimatedLogo() {
  const [autoplay, setAutoplay] = useState(false);

  // delay to attempt to prevent glitch when animation starts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoplay(true);
    }, 100)
    return () => clearTimeout(timer);
  }, []);

  return (
    <Lottie  
      id="lottie"
      style={{ 
        height: '200px' 
      }}
      options={{
        animationData: animationData,
        loop: false,
       autoplay: autoplay
      }}
    />
  )
}

export default AnimatedLogo;