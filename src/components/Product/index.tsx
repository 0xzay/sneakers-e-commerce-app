import React from 'react';

type ProductProps = {
  id: string;
  title: string;
  brand: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  rating: number;
  color: string;
};

export const Product: React.FC<ProductProps> = ({
  id,
  title,
  brand,
  price,
  imageUrl,
  sizes,
  rating,
  color,
}) => {
  return (
    <div
      className={`w-full max-w-[472.7px] h-[500px] bg-[#f2f3f3] flex flex-col justify-between`}
    >
      <div className="self-end pt-4 pr-4 pl-4 z-10 cursor-pointer">
        <svg
          viewBox="0 0 24.00 24.00"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          height="36px"
          width="36px"
        >
          <g id="SVGRepo_iconCarrier">
            <g id="Interface / Heart_01">
              <path
                id="Vector"
                d="M12 7.69431C10 2.99988 3 3.49988 3 9.49991C3 15.4999 12 20.5001 12 20.5001C12 20.5001 21 15.4999 21 9.49991C21 3.49988 14 2.99988 12 7.69431Z"
                stroke="#808080"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div className="w-[400px] h-[300px] self-center">
        <img src={imageUrl} className="object-cover -translate-y-12" alt="" />
      </div>
      <div className="flex justify-between items-center p-8 text-xl">
        <div>
          <p className="font-bold">{brand}</p>
          <p>{title}</p>
        </div>
        <p className="font-bold">{price.toString()} ₽</p>
      </div>
    </div>
  );
};
