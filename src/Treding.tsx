type ImageCardProps = {
  key: number;
  image: string;
};

type Props = {
  category: String;
  images: string[];
};

const ImageCard = (props: ImageCardProps): React.JSX.Element => {
  return (
    <div>
      <p>{props.image}</p>
    </div>
  );
};

const TrendingProducts = (props: Props): React.JSX.Element => {
  const imageCards: React.JSX.Element[] = props.images.map((image, index) => {
    return <ImageCard key={index} image={image} />;
  });

  return (
    <div className="trending">
      <p>{props.category}</p>
      <div className="image-cards">{imageCards}</div>
    </div>
  );
};

const Products = (): React.JSX.Element => {
  return (
    <>
      <TrendingProducts category={'men'} images={['1', '2', '3']} />
      <TrendingProducts category={'women'} images={['1']} />
      <TrendingProducts category={'children'} images={['1']} />
    </>
  );
};

export default Products;
