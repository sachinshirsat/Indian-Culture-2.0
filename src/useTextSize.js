// useTextSize.js
import { useState } from 'react';

const useTextSize = (maxSize) => {
  const [textSize, setTextSize] = useState(16);

  const increaseTextSize = () => {
    if (textSize < maxSize) {
      setTextSize(textSize + 1);
    }
  };

  const resetTextSize = () => {
    setTextSize(16);
  };

  const decreaseTextSize = () => {
    setTextSize(Math.max(textSize - 1, 14));
  };

  return {
    textSize,
    increaseTextSize,
    resetTextSize,
    decreaseTextSize,
  };
};

export default useTextSize;
