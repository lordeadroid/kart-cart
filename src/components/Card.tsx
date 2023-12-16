import { useState } from 'react';
import { CategoryData } from '../utils/interfaces';

export const Card = ({ data }: CategoryData) => {
  const [isHovered, setIsHovered] = useState(false);
  const [foreImage, backImage] = data.images;
  const { mrp, price, name } = data;
  const discount = `${Math.round(((price - mrp) * 100) / mrp)}% Off`;

  const image = isHovered ? backImage : foreImage;

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
        <img src={image} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="prices">
        <div className="price">{price}</div>
        <div className="mrp">{mrp}</div>
        <div className="discount">{discount}</div>
      </div>
    </div>
  );
};
