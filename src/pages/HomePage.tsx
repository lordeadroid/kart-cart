import Footer from '../layouts/Footer';
import ImageGallery from '../components/ImageGallery';
import TrendingProducts from '../components/Trending';
import React from 'react';

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
