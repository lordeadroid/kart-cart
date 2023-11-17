type CategoryType = {
  props: string;
};

const Category = ({ props }: CategoryType): React.JSX.Element => {
  return (
    <div className="category-component">
      <div className="image-container"></div>
      <p>{props}</p>
    </div>
  );
};

const Categories: () => React.JSX.Element = () => {
  return <Category props="mobiles" />;
};

export default Categories;
