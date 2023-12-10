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

  const element =
    data === null ? (
      <></>
    ) : (
      <>
        <p className="trending-text">Trending</p>
        <Products data={data[0]} />
        <Products data={data[1]} />
        <Products data={data[2]} />
      </>
    );

  return element;
};

export default TrendingProducts;
