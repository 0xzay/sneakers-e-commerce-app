import React from 'react';
import { Filters } from '../Filters';
import { Sort } from '../Sort';
import { selectFilters } from '../../redux/filters/selectors';
import { useSelector } from 'react-redux';
import { setBrandFilter, setColorFilter } from '../../redux/filters/slice';
import { useAppDispatch } from '../../redux/store';

export const ProductsHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const { brandFilter, colorFilter, sort, searchValue } =
    useSelector(selectFilters);

  const onChangeBrand = React.useCallback((idx: string) => {
    dispatch(setBrandFilter(idx));
  }, []);

  const onChangeColor = React.useCallback((idx: string) => {
    dispatch(setColorFilter(idx));
  }, []);

  const brandFilterList = ['New Balance', 'Anta', 'Diadora'];

  return (
    <div className="pb-6">
      <h1 className="text-7xl md:text-9xl font-bold uppercase p-2 md:p-16">
        {brandFilter === '' ? 'all sneakers' : brandFilter}
      </h1>
      <div className="flex flex-col md:flex-row justify-between md:ml-10 md:mr-10">
        <Filters
          brandFilterList={brandFilterList}
          brandValue={brandFilter}
          colorValue={colorFilter}
          onChangeBrand={onChangeBrand}
          onChangeColor={onChangeColor}
        />
        <Sort />
      </div>
    </div>
  );
};
