import { Link } from 'react-router-dom';

const LeftTopBar = (): React.JSX.Element => {
  return (
    <div className="left-top-bar">
      <div className="category">
        <Link to="/category/men">Men</Link>
      </div>
      <div className="category">
        <Link to="/category/women">Women</Link>
      </div>
      <div className="category">
        <Link to='/category/children'>Children</Link>
      </div>
    </div>
  );
};

export default LeftTopBar;
