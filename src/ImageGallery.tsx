import { useEffect, useState } from 'react';

const ImageGallery = (): React.JSX.Element => {
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState<string[]>([
    'https://miro.medium.com/v2/resize:fit:640/format:webp/1*9EBHIOzhE1XfMYoKz1JcsQ.gif',
  ]);

  useEffect(() => {
    fetch('https://kart-cart-bff.onrender.com/homepagedata')
      .then((response) => response.json())
      .then((data: string[]): void => {
        setImages(data);
      });

    const intervalId = setInterval(() => {
      setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1);
    }, 2500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <img src={images[imageIndex]} alt="Images of products" />
    </div>
  );
};

export default ImageGallery;
