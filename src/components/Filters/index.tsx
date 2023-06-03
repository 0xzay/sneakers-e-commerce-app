import React from 'react';

const BrandFilter = ['New Balance', 'Anta', 'Diadora'];

const ColorFilter = ['White', 'Black', 'Gray', 'Blue', 'Cyan'];

export const Filters = () => {
  return (
    <div className="flex gap-4">
      <div className="flex items-center gap-1">
        <p className="text-gray-400 text-xl">Brand: </p>
        <select name="" id="" className="font-bold outline-none text-xl">
          <option value="">Not selected</option>
          {BrandFilter.map((brand, i) => (
            <option key={i}>{brand}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-gray-400 text-xl">Color: </p>
        <select name="" id="" className="font-bold outline-none text-xl">
          <option value="">Not selected</option>
          {ColorFilter.map((color, i) => (
            <option key={i}>{color}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
