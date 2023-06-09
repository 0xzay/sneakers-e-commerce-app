import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { getUsdPrice } from '../utils/getUsdPrice';

export const About = () => {
  const [usdPrice, setUsdPrice] = React.useState(0);
  React.useEffect(() => {
    getUsdPrice().then(res => setUsdPrice(res));
  }, []);
  return (
    <>
      <Header usdPrice={usdPrice} />
      <div className="md:mr-96 mt-10 md:ml-96 mb-64 md:mb-96">
        <div className="flex gap-2 mb-10">
          <Link to="/">Home</Link> <span className="text-gray-300">/</span>{' '}
          <p className="font-bold">About</p>
        </div>
        <div>
          <h1 className="text-6xl font-bold">About</h1>
          <hr className="mb-4 mt-4" />
          <p className="text-xl">
            This project is a E-Commerce sneakers app. I developed the
            user-friendly design myself and tried to use all my skills to create
            a great app that can meet the needs of any user.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
