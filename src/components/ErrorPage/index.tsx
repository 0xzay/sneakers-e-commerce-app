import { Header } from '../Header';
import { Footer } from '../Footer';
import tyagi from '../../assets/tyagi.gif';
import React from 'react';
import { getUsdPrice } from '../../utils/getUsdPrice';

export const ErrorPage = () => {
  const [usdPrice, setUsdPrice] = React.useState(0);
  React.useEffect(() => {
    getUsdPrice().then(res => setUsdPrice(res));
  }, []);
  return (
    <>
      <Header usdPrice={usdPrice} />
      <div className="flex flex-col p-44">
        <img src={tyagi} alt="not found" className="self-center w-96" />
        <div className="text-center">
          <h1 className="text-9xl font-bold">404</h1>
          <h2 className="text-3xl mt-2">Not Found</h2>
        </div>
      </div>
      <Footer />
    </>
  );
};
