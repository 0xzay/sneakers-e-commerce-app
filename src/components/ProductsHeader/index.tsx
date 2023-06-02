import React from 'react';

export const BrandFilter = [
  { title: 'New Balance' },
  { title: 'Adidas' },
  { title: 'Nike' },
];

export const ColorFilter = [
  { title: 'White' },
  { title: 'Black' },
  { title: 'Gray' },
  { title: 'Blue' },
  { title: 'Cyan' },
];

export const SortList = [
  { title: 'Rating' },
  { title: 'Price (Low)' },
  { title: 'Price (Hight)' },
];

export const ProductsHeader: React.FC = () => {
  return (
    <div className="pb-6">
      <h1 className="text-9xl font-bold uppercase p-16">all sneakers</h1>
      <div className="flex justify-between ml-10 mr-10">
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <p className="text-gray-400 text-xl">Brand: </p>
            <select name="" id="" className="font-bold outline-none text-xl">
              <option value="">Not selected</option>
              {BrandFilter.map((obj: any) => (
                <option key={obj.title}>{obj.title}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-gray-400 text-xl">Color: </p>
            <select name="" id="" className="font-bold outline-none text-xl">
              <option value="">Not selected</option>
              {ColorFilter.map((obj: any) => (
                <option key={obj.title}>{obj.title}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-gray-400 text-xl">Sort by: </p>
          <select name="" id="" className="font-bold outline-none text-xl">
            <option value="">Not selected</option>
            {SortList.map((obj: any) => (
              <option key={obj.title}>{obj.title}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
