import { CategoryData } from '../utils/interfaces';

const Card = ({ data, productId }: CategoryData) => {
  const [foreImage, backImage] = data.images;
  return (
    <>
      <img src={foreImage} alt="" />
      <p>{productId}</p>
    </>
  );
};

export default Card;
