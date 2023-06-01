import React from 'react';

export const Product: React.FC = () => {
  return (
    <div className="w-full max-w-[472.7px] h-[500px] bg-gray-100 flex flex-col justify-between bg-[url('././assets/sneaker.png')] bg-no-repeat bg-center">
      <div className="self-end p-4">
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
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div className="flex justify-between items-center p-8 text-xl">
        <div>
          <p className="font-bold">New Balance</p>
          <p>530</p>
        </div>
        <p className="font-bold">20 190 ₽</p>
      </div>
    </div>
  );
};
