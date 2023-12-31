import { Link } from 'react-router-dom';
import LeftTopBar from './LeftTopBar';
import RightTopBar from './RightTopBar';
import React from 'react';

const LogoName = (): React.JSX.Element => {
  return (
    <div className="logo">
      <Link className="link" to="/">
        Kart-Cart
      </Link>
    </div>
  );
};

const NavigationBar = (): React.JSX.Element => {
  return (
    <div className="navigation-bar">
      <LeftTopBar />
      <LogoName />
      <RightTopBar />
    </div>
  );
};

export default NavigationBar;
