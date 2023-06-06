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
        <img src={imageUrl} alt="" className="w-32 md:w-56" />
        <div className="p-2 md:p-6 md:text-2xl text-left">
          <p className="font-bold">{brand}</p>
          <p>{title}</p>
        </div>
      </div>
      <div className="flex flex-col p-2 md:p-6 items-end justify-between">
        <button
          className="w-5 h-5 md:w-10 md:h-10 hover:bg-gray-100 rounded-full"
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
          <p className="md:text-xl font-bold text-end mb-2 md:mb-4">
            {currency == 'USD'
              ? Math.trunc(price / usdPrice).toLocaleString()
              : price.toLocaleString()}{' '}
            {currency == 'USD' ? '$' : '₽'}
          </p>
          <button
            className="pt-1 pb-1 pl-2 pr-2 md:pt-2 md:pb-2 md:pl-6 md:pr-6 text-xs md:text-md uppercase font-bold bg-[#4c4c4c] hover:bg-[#333333] active:bg-[#2d2d2d] text-white transition-all duration-150"
            onClick={onClickAdd}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
