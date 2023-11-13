type CategoryType = {
  category: string;
}

const Category = ({ category }: CategoryType) => {
  return (
    <div className="category-component">
      <div className="image-container"></div>
      <p>{category}</p>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="categories">
      <Category category="Mobiles" />
      <Category category="Fashion" />
      <Category category="Travel" />
      <Category category="Appliances" />
      <Category category="Electronics" />
    </div>
  );
};

export default Categories;
