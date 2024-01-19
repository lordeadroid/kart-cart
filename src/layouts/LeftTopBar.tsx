import React from 'react';
import { Link } from 'react-router-dom';

const LeftTopBar = (): React.JSX.Element => {
  return (
    <div className="left-top-bar">
      <div className="category">
        <Link className="link" to="/category/men">
          Men
        </Link>
      </div>
      <div className="category">
        <Link className="link" to="/category/women">
          Women
        </Link>
      </div>
      <div className="category">
        <Link className="link" to="/category/kids">
          Kids
        </Link>
      </div>
    </div>
  );
};

export default LeftTopBar;
