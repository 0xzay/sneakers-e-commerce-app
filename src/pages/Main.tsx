import React from 'react';
import { Header } from '../components/Header';
import { ProductsHeader } from '../components/ProductsHeader';
import { Products } from '../components/Products';
import { Footer } from '../components/Footer';
import { getUsdPrice } from '../utils/getUsdPrice';

export const Main = () => {
  const [usdPrice, setUsdPrice] = React.useState(0);
  React.useEffect(() => {
    getUsdPrice().then(res => setUsdPrice(res));
  }, []);
  return (
    <div>
      <Header usdPrice={usdPrice} />
      <ProductsHeader />
      <Products usdPrice={usdPrice} />
      <Footer />
    </div>
  );
};
