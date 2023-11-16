import { BrowserRouter as Router, Link } from 'react-router-dom';

type CategoryType = {
  category: string;
};

const Category = ({ category }: CategoryType): React.JSX.Element => {
  return (
    <div className="category-component">
      <div className="image-container"></div>
      <p>{category}</p>
    </div>
  );
};

const Categories = () => {
  return (
    <Router>
      <div className="categories">
        <Link to="/mobiles">
          <Category category="Mobiles" />
        </Link>
        <Category category="Fashion" />
        <Category category="Travel" />
        <Category category="Appliances" />
        <Category category="Electronics" />
      </div>
    </Router>
  );
};

export default Categories;
