import React from 'react';

export const ProductMini = () => {
  return (
    <div className="flex justify-between w-full border-t">
      <div className="flex">
        <div className="bg-[url('././assets/sneaker.png')] bg-no-repeat bg-contain w-56"></div>
        <div className="p-6 text-2xl text-left">
          <p className="font-bold">New balance</p>
          <p>530</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-20 p-8 justify-between">
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <button className="w-10 h-10 bg-gray-100 rounded-full text-xl font-bold">
              -
            </button>
            <span className="text-xl">1</span>
            <button className="w-10 h-10 bg-gray-100 rounded-full text-xl font-bold">
              +
            </button>
          </div>
          <div className="h-10 w-10 hover:bg-gray-100 rounded-full">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="m-auto mt-1.5"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M16 8L8 16M8.00001 8L16 16"
                  stroke="#b5b9bf"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <p className="text-xl font-bold">
          <span className="text-gray-300 mr-4">25 259 ₽</span> 20 190 ₽
        </p>
      </div>
    </div>
  );
};
