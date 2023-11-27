import LeftTopBar from './LeftTopBar';
import RightTopBar from './RightTopBar';

const LogoName = (): React.JSX.Element => {
  return (
    <div>
      <h1 className="logo">Kart Cart</h1>
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
