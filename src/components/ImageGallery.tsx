import React, { useEffect, useState } from "react";

const ImageGallery = (): React.JSX.Element => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [images, setImages] = useState<string[]>([]);

  useEffect((): void => {
    fetch("https://kart-cart-bff.onrender.com/homepagedata")
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
    <div className="flex justify-center">
      <img
        src={images[imageIndex]}
        className="skeleton h-[900px] w-[1450px]"
      />
    </div>
  );
};

export default ImageGallery;
