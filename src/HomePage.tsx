import Footer from './Footer';
import ImageGallery from './ImageGallery';
import TrendingProducts from './Trending';

const HomePage = (): React.JSX.Element => {
  return (
    <>
      <ImageGallery />
      <TrendingProducts />
      <Footer />
    </>
  );
};

export default HomePage;
