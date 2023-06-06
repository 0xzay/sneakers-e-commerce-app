import React from 'react';
import { CartItem } from '../../redux/cart/types';
import { useSelector } from 'react-redux';
import { selectCurrency } from '../../redux/currency/selectors';
import { useAppDispatch } from '../../redux/store';
import { addItem, minusItem, removeItem } from '../../redux/cart/slice';

interface CartProductProps extends CartItem {
  usdPrice: number;
}

export const CartProduct: React.FC<CartProductProps> = ({
  id,
  title,
  price,
  brand,
  count,
  imageUrl,
  usdPrice,
}) => {
  const dispatch = useAppDispatch();
  const { currency } = useSelector(selectCurrency);
  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as CartItem)
    );
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    dispatch(removeItem(id));
  };
  return (
    <div className="flex justify-between w-full border-b">
      <div className="flex">
        <img src={imageUrl} alt="" className="w-32 md:w-56" />
        <div className="p-2 md:p-6 text-sm md:text-2xl text-left">
          <p className="font-bold">{brand}</p>
          <p>{title}</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-20 p-2 md:p-8 justify-between">
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <button
              className="w-5 h-5 md:w-10 md:h-10 bg-gray-100 rounded-full text-sm md:text-xl font-bold"
              onClick={count === 1 ? onClickRemove : onClickMinus}
            >
              -
            </button>
            <span className="md:text-xl">{count}</span>
            <button
              className="w-5 h-5 md:w-10 md:h-10 bg-gray-100 rounded-full text-sm md:text-xl font-bold"
              onClick={onClickPlus}
            >
              +
            </button>
          </div>
          <button
            className="w-5 h-5 hover:bg-gray-100 rounded-full"
            onClick={onClickRemove}
          >
            <svg
              width="20px"
              height="20px"
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
        </div>
        <p className="md:text-xl font-bold">
          {currency == 'USD'
            ? Math.trunc((price * count) / usdPrice).toFixed(2)
            : (price * count).toLocaleString()}{' '}
          {currency == 'USD' ? '$' : '₽'}
        </p>
      </div>
    </div>
  );
};
