import React from 'react';
import { SortPropertyEnum } from '../../redux/sort/types';

export const SortList = [
  { title: 'Rating', sortProperty: SortPropertyEnum.RATING_DESC },
  { title: 'Price (Low)', sortProperty: SortPropertyEnum.PRICE_ASC },
  { title: 'Price (Hight)', sortProperty: SortPropertyEnum.PRICE_DESC },
];

export const Sort = () => {
  return (
    <div className="flex items-center gap-1">
      <p className="text-gray-400 text-xl">Sort by: </p>
      <select name="" id="" className="font-bold outline-none text-xl">
        <option value="">Not selected</option>
        {SortList.map((obj: any) => (
          <option key={obj.title}>{obj.title}</option>
        ))}
      </select>
    </div>
  );
};
