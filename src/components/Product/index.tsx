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
    <div className="w-full bg-[#f2f3f3] flex flex-col max-w-[472.7px]">
      <button className="self-end mt-8 mr-8">
        <svg
          viewBox="0 0 24.00 24.00"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          width="40px"
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
      </button>
      <img src={imageUrl} alt="" className="" />
      <div className="flex items-center justify-between mr-8 ml-8 mb-8">
        <div>
          <p className="text-xl font-bold">{brand}</p>
          <p className="text-xl">{title}</p>
        </div>
        <p className="font-bold text-xl">{price} $</p>
      </div>
    </div>
  );
};
