import React from 'react';
import { Product } from '../Product';

export const Products: React.FC = () => {
  return (
    <main className="flex flex-wrap w-full h-full gap-1 mb-32">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </main>
  );
};
