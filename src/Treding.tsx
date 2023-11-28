type ImageCardProps = {
  key: number;
  image: string;
};

type Props = {
  category: String;
  images: string[];
};

const ImageCard = (props: {image: string}): React.JSX.Element => {
  console.log(props);

  return (
    <div>
      <p>{props.image}</p>
    </div>
  );
};

const Products = (props: { data: Props }): React.JSX.Element => {
  const imageCards: React.JSX.Element[] = props.data.images.map((image, index) => {
    return <ImageCard key={index} image={image} />;
  });

  return (
    <div className="trending">
      <p>{props.data.category}</p>
      <div className="image-cards">{imageCards}</div>
    </div>
  );
};

const TrendingProducts = (): React.JSX.Element => {
  const data: Props[] = [
    { category: 'men', images: ['1', '2', '3', '4'] },
    { category: 'women', images: ['5', '6', '7', '8'] },
    { category: 'children', images: ['9', '10', '11', '12'] },
  ];
  console.log(data[0]);

  return (
    <>
      <p className="trending-text">Trending</p>
      <Products data={data[0]} />
      <Products data={data[1]} />
      <Products data={data[2]} />
    </>
  );
};

export default TrendingProducts;
