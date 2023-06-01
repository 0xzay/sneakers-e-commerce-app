import React from 'react';

export const ProductsHeader: React.FC = () => {
  return (
    <div className="pb-6">
      <h1 className="text-9xl font-bold uppercase p-16">new balance</h1>
      <div className="flex justify-between ml-10 mr-10">
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <p className="text-gray-400 text-xl">Brand: </p>
            <select name="" id="" className="font-bold outline-none text-xl">
              <option value="">Not selected</option>
              <option value="">New Balance</option>
              <option value="">Adidas</option>
              <option value="">Nike</option>
              <option value="">Asics</option>
            </select>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-gray-400 text-xl">Color: </p>
            <select name="" id="" className="font-bold outline-none text-xl">
              <option value="">Not selected</option>
              <option value="">White</option>
              <option value="">Black</option>
              <option value="">Blue</option>
              <option value="">Cyan</option>
              <option value="">Gray</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-gray-400 text-xl">Sort by: </p>
          <select name="" id="" className="font-bold outline-none text-xl">
            <option value="">Not selected</option>
            <option value="">Price (Low)</option>
            <option value="">Price (Hight)</option>
          </select>
        </div>
      </div>
    </div>
  );
};
