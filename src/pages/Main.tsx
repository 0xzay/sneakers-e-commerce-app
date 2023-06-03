import React from 'react';
import { Header } from '../components/Header';
import { ProductsHeader } from '../components/ProductsHeader';
import { Products } from '../components/Products';
import { Footer } from '../components/Footer';

export const Main = () => {
  return (
    <div>
      <Header />
      <ProductsHeader />
      <Products />
      <Footer />
    </div>
  );
};
