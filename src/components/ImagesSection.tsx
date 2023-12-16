import { useEffect, useState } from 'react';

const ImagesSection = () => {
  const images = [1, 2, 3, 4, 5];
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return <div className='images-section'>{images[imageIndex]}</div>;
};

export default ImagesSection;
