import { CategoryData } from '../utils/interfaces';

const Card = ({ data, productId }: CategoryData) => {
  const [foreImage, backImage] = data.images;
  return (
    <div className="card">
      <div className="image">
        <img src={foreImage} alt={data.name} />
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
