import React from 'react';
import { Filters } from '../Filters';
import { Sort } from '../Sort';

export const ProductsHeader: React.FC = () => {
  return (
    <div className="pb-6">
      <h1 className="text-9xl font-bold uppercase p-16">all sneakers</h1>
      <div className="flex justify-between ml-10 mr-10">
        <Filters />
        <Sort />
      </div>
    </div>
  );
};
