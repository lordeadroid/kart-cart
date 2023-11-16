import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';

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

const MobilesPage = () => {
  return <div>New Page</div>;
};

const Categories = () => {
  return (
    <BrowserRouter>
      <div className="categories">
        <NavLink to="/mobiles">
          <Category category="Mobiles" />
        </NavLink>
        <Link to="Fashion">
          <Category category="Fashion" />
        </Link>
        <Link to="Travel">
          <Category category="Travel" />
        </Link>
        <Link to="Appliances">
          <Category category="Appliances" />
        </Link>
        <Link to="Electronics">
          <Category category="Electronics" />
        </Link>
        <Routes>
          <Route path="/mobiles" element={<MobilesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Categories;
