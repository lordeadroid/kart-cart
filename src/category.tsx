type CategoryType = {
  category: string;
  onClick: () => void;
};

const Category = ({ category, onClick }: CategoryType): React.JSX.Element => {
  return (
    <div className="category-component" onClick={onClick}>
      <div className="image-container"></div>
      <p>{category}</p>
    </div>
  );
};

const Categories = () => {
  const onClick: () => void = () => {
    alert('hello');
  };

  return (
    <div className="categories">
      <Category category="Mobiles" onClick={onClick} />
      <Category category="Fashion" onClick={onClick} />
      <Category category="Travel" onClick={onClick} />
      <Category category="Appliances" onClick={onClick} />
      <Category category="Electronics" onClick={onClick} />
    </div>
  );
};

export default Categories;
