import React from 'react';
import { Product } from '../Product';
import { useAppDispatch } from '../../redux/store';
import { fetchSneakers } from '../../redux/sneakers/asyncActions';
import { useSelector } from 'react-redux';
import { selectSneakersData } from '../../redux/sneakers/selectors';

export const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectSneakersData);

  const getSneakers = async () => {
    dispatch(fetchSneakers());

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getSneakers();
  }, []);

  return (
    <main className="flex flex-wrap w-full h-full gap-1 mb-32">
      {items.map((obj: any) => (
        <Product key={obj.id} {...obj} />
      ))}
    </main>
  );
};
