import { WishItem } from '../redux/wish/types';

export const getWishFromLS = () => {
  const data = localStorage.getItem('wish');
  const items = data ? JSON.parse(data) : [];

  return {
    items: items as WishItem[],
  };
};
