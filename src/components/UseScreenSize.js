import { useState, useEffect } from 'react'

function UsescreenSize() {
  const [screenSize , setScreenSize] = useState({Width: window.innerWidth, Height: window.innerHeight,});

  useEffect(()=> {
    const handleResize = () => {
      setScreenSize({Width:window.innerWidth, Height: window.innerHeight,});
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, []);
  return (
    screenSize
  )
}

export default UsescreenSize;