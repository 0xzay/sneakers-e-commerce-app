import React from 'react';
import { SortPropertyEnum } from '../../redux/filters/types';
import { setSort } from '../../redux/filters/slice';
import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { selectFilters } from '../../redux/filters/selectors';

type SortItem = {
  title: string;
  sortProperty: SortPropertyEnum;
};

export const sortList: SortItem[] = [
  { title: 'Not selected', sortProperty: SortPropertyEnum.NOTHING },
  { title: 'Rating', sortProperty: SortPropertyEnum.RATING },
  { title: 'Price (Low)', sortProperty: SortPropertyEnum.PRICE_ASC },
  { title: 'Price (Hight)', sortProperty: SortPropertyEnum.PRICE_DESC },
];

export const Sort = () => {
  const dispatch = useAppDispatch();
  const { sort } = useSelector(selectFilters);
  const onClickListItem = (obj: SortItem) => {
    dispatch(setSort(obj));
  };
  return (
    <div className="flex mt-2 items-center gap-1">
      <p className="text-gray-400 text-xl">Sort by: </p>
      <select
        name=""
        id=""
        className="font-bold outline-none text-xl"
        onChange={e => onClickListItem(JSON.parse(e.target.value))}
      >
        {sortList.map((obj: any) => (
          <option
            key={obj.title}
            value={JSON.stringify(obj)}
            className={sort.title === obj.title ? 'bg-gray-200' : ''}
          >
            {obj.title}
          </option>
        ))}
      </select>
    </div>
  );
};
