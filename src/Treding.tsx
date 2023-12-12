import { useEffect, useState } from 'react';

type ImageCardProps = {
  key: number;
  image: string;
};

type Props = {
  category: String;
  images: string[];
};

type ProductsProps = {
  data: Props;
};

const ImageCard = (props: ImageCardProps): React.JSX.Element => {
  return (
    <div>
      <p>{props.image}</p>
    </div>
  );
};

const Products = (props: ProductsProps): React.JSX.Element => {
  const imageCards: React.JSX.Element[] = props.data.images.map(
    (image, index) => {
      return <ImageCard key={index} image={image} />;
    }
  );

  return (
    <div className="trending">
      <p>{props.data.category}</p>
      <div className="image-cards">{imageCards}</div>
    </div>
  );
};

const TrendingProducts = (): any => {
  const [data, setData] = useState<null | Props[]>(null);

  useEffect(() => {
    fetch('https://kart-cart-bff.onrender.com/trending')
      .then((response) => response.json())
      .then((data: Props[]): void => {
        setData(data);
      });
  }, []);

  const products: React.JSX.Element[] | undefined = data?.map(
    (element, index) => {
      return <Products data={element} key={index} />;
    }
  );

  const loading: React.JSX.Element = <p>Loading...</p>;
  const trendingProducts: React.JSX.Element = (
    <>
      <p className="trending-text">Trending</p>
      {products}
    </>
  );

  return data === null ? loading : trendingProducts;
};

export default TrendingProducts;
