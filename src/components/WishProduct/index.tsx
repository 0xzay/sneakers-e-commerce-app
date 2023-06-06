import React from 'react';
import { WishItem } from '../../redux/wish/types';
import { removeWishItem } from '../../redux/wish/slice';
import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { selectCurrency } from '../../redux/currency/selectors';
import { addItem } from '../../redux/cart/slice';

interface WishProductProps extends WishItem {
  usdPrice: number;
}

export const WishProduct: React.FC<WishProductProps> = ({
  imageUrl,
  brand,
  title,
  price,
  id,
  usdPrice,
}) => {
  const dispatch = useAppDispatch();
  const { currency } = useSelector(selectCurrency);
  const onClickRemove = () => {
    dispatch(removeWishItem(id));
  };
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
  return (
    <div className="flex justify-between w-full border-b">
      <div className="flex">
        <img src={imageUrl} alt="" className="w-56" />
        <div className="p-6 text-2xl text-left">
          <p className="font-bold">{brand}</p>
          <p>{title}</p>
        </div>
      </div>
      <div className="flex flex-col p-6 items-end justify-between">
        <button
          className="h-10 w-10 hover:bg-gray-100 rounded-full"
          onClick={onClickRemove}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="m-auto"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M16 8L8 16M8.00001 8L16 16"
                stroke="#b5b9bf"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </button>
        <div>
          <p className="text-xl font-bold text-end mb-4">
            {currency == 'USD'
              ? Math.trunc(price / usdPrice).toLocaleString()
              : price.toLocaleString()}{' '}
            {currency == 'USD' ? '$' : '₽'}
          </p>
          <button
            className="pt-2 pb-2 pl-6 pr-6 uppercase font-bold bg-[#4c4c4c] hover:bg-[#333333] active:bg-[#2d2d2d] text-white transition-all duration-150"
            onClick={onClickAdd}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
