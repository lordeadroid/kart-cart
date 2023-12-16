import { useState } from 'react';
import { CategoryData } from '../utils/interfaces';

const Card = ({ data, productId }: CategoryData) => {
  const [isHovered, setIsHovered] = useState(false);
  const [foreImage, backImage] = data.images;

  const image: string = isHovered ? backImage : foreImage;

  const handleHover = (): void => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="card">
      <div
        className="image"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <img src={image} alt={data.name} />
      </div>
      <div className="name">{data.name}</div>
      <div className="prices">
        <div className="price">{data.price}</div>
        <div className="mrp">{data.mrp}</div>
      </div>
    </div>
  );
};

export default Card;
