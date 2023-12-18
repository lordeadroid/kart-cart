import React, { useEffect, useState } from 'react';

const ImageGallery = (): React.JSX.Element => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [images, setImages] = useState<string[]>([
    'https://miro.medium.com/v2/resize:fit:640/format:webp/1*9EBHIOzhE1XfMYoKz1JcsQ.gif',
  ]);

  useEffect((): void => {
    fetch('https://kart-cart-bff.onrender.com/homepagedata')
      .then((response) => response.json())
      .then((data: string[]): void => {
        setImages(data);
      });
  }, []);

  useEffect((): (() => void) => {
    const intervalId = setInterval(() => {
      setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className="flex justify-between">
      <div className="h-10 w-5 border-2"></div>
      <img
        src={images[imageIndex]}
        alt="Images of products"
        className="h-[900px]"
      />
      <div className="h-10 w-5 border-2"></div>
    </div>
  );
};

export default ImageGallery;
