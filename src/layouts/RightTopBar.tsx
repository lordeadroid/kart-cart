import React from 'react';
import { Link } from 'react-router-dom';

const RightTopBar = (): React.JSX.Element => {
  return (
    <div className="right-top-bar">
      <div>
        <Link className="link" to="/about">
          About
        </Link>
      </div>
      <div>
        <Link className="link" to="/basket">
          Basket
        </Link>
      </div>
      <div>
        <Link className="link" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default RightTopBar;
