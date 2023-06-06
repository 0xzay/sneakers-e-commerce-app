import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrency } from '../../redux/currency/selectors';
import { addItem } from '../../redux/cart/slice';
import { useAppDispatch } from '../../redux/store';
import { removeWishItem, wishItem } from '../../redux/wish/slice';
import { selectWishItems } from '../../redux/wish/selectors';

type ProductProps = {
  id: string;
  title: string;
  brand: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  rating: number;
  color: string;
  usdPrice: number;
};

export const Product: React.FC<ProductProps> = ({
  id,
  title,
  brand,
  price,
  imageUrl,
  rating,
  usdPrice,
}) => {
  const dispatch = useAppDispatch();
  const wish = useSelector(selectWishItems);
  const findItem = wish.find(obj => obj.id === id);
  const { currency } = useSelector(selectCurrency);

  const onClickAdd = () => {
    const item = {
      id,
      title,
      brand,
      price,
      imageUrl,
      count: 0,
    };
    dispatch(addItem(item));
  };

  const onClickWish = () => {
    if (findItem) {
      dispatch(removeWishItem(id));
    } else {
      const item = {
        id,
        title,
        brand,
        price,
        imageUrl,
      };
      dispatch(wishItem(item));
    }
  };

  return (
    <div className="w-full bg-[#f2f3f3] flex flex-col md:max-w-[472.7px] min-h-[632.6px]">
      <button className="self-end mt-8 mr-8" onClick={onClickWish}>
        <svg
          viewBox="0 0 24.00 24.00"
          fill={findItem ? '#ed5355' : 'none'}
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          width="48px"
        >
          <g id="SVGRepo_iconCarrier">
            <g id="Interface / Heart_01">
              <path
                id="Vector"
                d="M12 7.69431C10 2.99988 3 3.49988 3 9.49991C3 15.4999 12 20.5001 12 20.5001C12 20.5001 21 15.4999 21 9.49991C21 3.49988 14 2.99988 12 7.69431Z"
                stroke={findItem ? '#ed5355' : '#808080'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </g>
        </svg>
      </button>
      <img src={imageUrl} alt="" className="min-h-[472px]" />
      <div className="flex items-center justify-between mr-8 ml-8">
        <div>
          <p className="text-xl font-bold">{brand}</p>
          <p className="text-xl">{title}</p>
        </div>
        <p className="font-bold text-xl">
          {currency == 'USD'
            ? Math.trunc(price / usdPrice).toFixed(2)
            : price.toLocaleString()}{' '}
          {currency == 'USD' ? '$' : '₽'}
        </p>
      </div>
      <div className="flex p-8 justify-between items-center">
        <div className="flex items-center gap-2">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="#ede253"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12.5095 17.7915C12.1888 17.6289 11.8112 17.6289 11.4905 17.7915L7.37943 19.8751C6.50876 20.3164 5.52842 19.5193 5.76452 18.562L6.72576 14.6645C6.81767 14.2918 6.72079 13.8972 6.46729 13.6117L3.29416 10.0378C2.66165 9.32543 3.11095 8.18715 4.05367 8.11364L8.48026 7.76848C8.89433 7.73619 9.25828 7.47809 9.43013 7.09485L10.9627 3.67703C11.3675 2.77432 12.6325 2.77432 13.0373 3.67703L14.5699 7.09485C14.7417 7.47809 15.1057 7.73619 15.5197 7.76848L19.9463 8.11364C20.889 8.18715 21.3384 9.32543 20.7058 10.0378L17.5327 13.6117C17.2792 13.8972 17.1823 14.2918 17.2742 14.6645L18.2355 18.562C18.4716 19.5193 17.4912 20.3164 16.6206 19.8751L12.5095 17.7915Z"
                stroke="#ede253"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          <p className="text-xl font-bold">{rating / 10}</p>
        </div>
        <button
          className="pt-3 pb-3 pl-8 pr-8 uppercase font-bold bg-[#4c4c4c] hover:bg-[#333333] active:bg-[#2d2d2d] text-white transition-all duration-150"
          onClick={onClickAdd}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
