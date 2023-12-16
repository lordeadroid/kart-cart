import { Link } from 'react-router-dom';

const Footer = (): React.JSX.Element => {
  return (
    <div className="footer">
      <div className="footer-item">
        <Link to="/about" className="link">
          About
        </Link>
      </div>
      <div className="footer-item">
        <Link to="/seller" className="link">
          For Sellers
        </Link>
      </div>
    </div>
  );
};

export default Footer;
