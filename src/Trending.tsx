import { useEffect, useState } from 'react';
import { ProductsProps } from './interfaces';

const ImageCard = ({ image }: { image: string }): React.JSX.Element => {
  return (
    <div>
      <p>{image}</p>
    </div>
  );
};

const Products = ({ data }: { data: ProductsProps }): React.JSX.Element => {
  const imageCards: React.JSX.Element[] = data.images.map(
    (image: string, index: number): React.JSX.Element => {
      return <ImageCard key={index} image={image} />;
    }
  );

  return (
    <div className="trending">
      <p>{data.category}</p>
      <div className="image-cards">{imageCards}</div>
    </div>
  );
};

const TrendingProducts = (): React.JSX.Element => {
  const [data, setData] = useState<null | ProductsProps[]>(null);

  useEffect(() => {
    fetch('https://kart-cart-bff.onrender.com/trending')
      .then((response) => response.json())
      .then((data: ProductsProps[]): void => {
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
