import { Link } from 'react-router-dom';

const RightTopBar = (): React.JSX.Element => {
  return (
    <div className="right-top-bar">
      <div className="section">
        <Link className='link' to="/about">About</Link>
      </div>
      <div className="section">
        <Link className='link' to="/search">Search</Link>
      </div>
      <div className="section">
        <Link className='link' to="/basket">Basket</Link>
      </div>
    </div>
  );
};

export default RightTopBar;
