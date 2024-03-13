import { useEffect, useState } from 'react'

function DynamicFontSize(id, minSize, preferredSize, maxSize, multiplier) {
  const [fontSize, setFontSize] = useState(preferredSize);

  useEffect(() => {
    const adjustFontSize = () => {
    let containerId = document.getElementById(id);
    if (containerId) {
      let containerWidth = containerId.offsetWidth;
      const newFontSize = Math.max(minSize, (Math.min(containerWidth * multiplier, maxSize)));
      setFontSize(newFontSize);
    }
    };

    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);
    return () => {
      window.removeEventListener('resize', adjustFontSize);
    };
  }, [id, minSize, preferredSize, maxSize, multiplier]);


  return (
    `${fontSize}px`
  );
};

export default DynamicFontSize;