import React from 'react';
import { ProductMini } from '../ProductMini';
import { useSelector } from 'react-redux';
import { selectCurrency } from '../../redux/currency/selectors';
import { useAppDispatch } from '../../redux/store';
import { setItems } from '../../redux/currency/slice';
import iconRU from '../../assets/icons/RU.svg';
import iconUS from '../../assets/icons/US.svg';
import { debounce } from 'lodash';
import { setSearchValue } from '../../redux/filters/slice';

const currencyList = [
  {
    id: 1,
    country: 'Russia',
    title: 'RUB ₽',
    image: iconRU,
    value: 'RUB',
  },
  {
    id: 2,
    country: 'United States',
    title: 'USD $',
    image: iconUS,
    value: 'USD',
  },
];

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currency } = useSelector(selectCurrency);
  const [openCurr, setOpenCurr] = React.useState(false);
  const [openCart, setOpenCart] = React.useState(false);
  const [openWish, setOpenWish] = React.useState(false);
  const [value, setValue] = React.useState<string>('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 150),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <header className="flex sticky top-0 w-full items-center pt-1 pb-1 bg-[#1F1F1F] h-24">
      <div className="flex-1 flex justify-between items-center flex-col gap-4 xl:ml-10 xl:mr-10 xl:flex-row">
        <div className="p-3 hover:bg-[#333333] active:bg-[#2d2d2d] rounded-full">
          <a href="/">
            <svg
              width="195"
              height="25"
              viewBox="0 0 195 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0455 8C13.9848 7.24242 13.7008 6.65151 13.1932 6.22727C12.6932 5.80303 11.9318 5.59091 10.9091 5.59091C10.2576 5.59091 9.72348 5.67045 9.30682 5.82954C8.89773 5.98106 8.5947 6.18939 8.39773 6.45454C8.20076 6.7197 8.09848 7.02273 8.09091 7.36364C8.07576 7.64394 8.125 7.89773 8.23864 8.125C8.35985 8.3447 8.54924 8.54545 8.80682 8.72727C9.06439 8.90151 9.39394 9.06061 9.79545 9.20455C10.197 9.34848 10.6742 9.47727 11.2273 9.59091L13.1364 10C14.4242 10.2727 15.5265 10.6326 16.4432 11.0795C17.3598 11.5265 18.1098 12.053 18.6932 12.6591C19.2765 13.2576 19.7045 13.9318 19.9773 14.6818C20.2576 15.4318 20.4015 16.25 20.4091 17.1364C20.4015 18.6667 20.0189 19.9621 19.2614 21.0227C18.5038 22.0833 17.4205 22.8902 16.0114 23.4432C14.6098 23.9962 12.9242 24.2727 10.9545 24.2727C8.93182 24.2727 7.16667 23.9735 5.65909 23.375C4.15909 22.7765 2.99242 21.8561 2.15909 20.6136C1.33333 19.3636 0.916667 17.7652 0.909091 15.8182H6.90909C6.94697 16.5303 7.125 17.1288 7.44318 17.6136C7.76136 18.0985 8.20833 18.4659 8.78409 18.7159C9.36742 18.9659 10.0606 19.0909 10.8636 19.0909C11.5379 19.0909 12.1023 19.0076 12.5568 18.8409C13.0114 18.6742 13.3561 18.4432 13.5909 18.1477C13.8258 17.8523 13.947 17.5152 13.9545 17.1364C13.947 16.7803 13.8295 16.4697 13.6023 16.2045C13.3826 15.9318 13.0189 15.6894 12.5114 15.4773C12.0038 15.2576 11.3182 15.053 10.4545 14.8636L8.13636 14.3636C6.07576 13.9167 4.45076 13.1705 3.26136 12.125C2.07955 11.072 1.49242 9.63636 1.5 7.81818C1.49242 6.34091 1.88636 5.04924 2.68182 3.94318C3.48485 2.82954 4.5947 1.96212 6.01136 1.34091C7.43561 0.719696 9.06818 0.40909 10.9091 0.40909C12.7879 0.40909 14.4129 0.723484 15.7841 1.35227C17.1553 1.98106 18.2121 2.86742 18.9545 4.01136C19.7045 5.14773 20.0833 6.47727 20.0909 8H14.0455ZM42.9489 0.727272V24H37.6761L29.267 11.7727H29.1307V24H22.8125V0.727272H28.1761L36.4489 12.9091H36.6307V0.727272H42.9489ZM45.9375 24V0.727272H62.7102V5.81818H52.2557V9.81818H61.8466V14.9091H52.2557V18.9091H62.6648V24H45.9375ZM71.8892 24H65.071L72.7528 0.727272H81.3892L89.071 24H82.2528L77.1619 7.13636H76.9801L71.8892 24ZM70.6165 14.8182H83.4347V19.5455H70.6165V14.8182ZM91.3125 24V0.727272H97.6307V10.1364H97.9489L104.949 0.727272H112.312L104.449 11.0909L112.494 24H104.949L99.7216 15.2727L97.6307 18V24H91.3125ZM114.188 24V0.727272H130.96V5.81818H120.506V9.81818H130.097V14.9091H120.506V18.9091H130.915V24H114.188ZM134.094 24V0.727272H144.139C145.866 0.727272 147.378 1.04167 148.673 1.67045C149.969 2.29924 150.976 3.20455 151.696 4.38636C152.416 5.56818 152.776 6.98485 152.776 8.63636C152.776 10.303 152.404 11.7083 151.662 12.8523C150.927 13.9962 149.893 14.8598 148.56 15.4432C147.234 16.0265 145.685 16.3182 143.912 16.3182H137.912V11.4091H142.639C143.382 11.4091 144.014 11.3182 144.537 11.1364C145.067 10.947 145.473 10.6477 145.753 10.2386C146.041 9.82955 146.185 9.29545 146.185 8.63636C146.185 7.9697 146.041 7.42803 145.753 7.01136C145.473 6.58712 145.067 6.27651 144.537 6.07954C144.014 5.875 143.382 5.77273 142.639 5.77273H140.412V24H134.094ZM147.73 13.3182L153.548 24H146.685L141.003 13.3182H147.73ZM168.014 8C167.954 7.24242 167.67 6.65151 167.162 6.22727C166.662 5.80303 165.901 5.59091 164.878 5.59091C164.226 5.59091 163.692 5.67045 163.276 5.82954C162.866 5.98106 162.563 6.18939 162.366 6.45454C162.17 6.7197 162.067 7.02273 162.06 7.36364C162.045 7.64394 162.094 7.89773 162.207 8.125C162.329 8.3447 162.518 8.54545 162.776 8.72727C163.033 8.90151 163.363 9.06061 163.764 9.20455C164.166 9.34848 164.643 9.47727 165.196 9.59091L167.105 10C168.393 10.2727 169.495 10.6326 170.412 11.0795C171.329 11.5265 172.079 12.053 172.662 12.6591C173.245 13.2576 173.673 13.9318 173.946 14.6818C174.226 15.4318 174.37 16.25 174.378 17.1364C174.37 18.6667 173.988 19.9621 173.23 21.0227C172.473 22.0833 171.389 22.8902 169.98 23.4432C168.579 23.9962 166.893 24.2727 164.923 24.2727C162.901 24.2727 161.135 23.9735 159.628 23.375C158.128 22.7765 156.961 21.8561 156.128 20.6136C155.302 19.3636 154.885 17.7652 154.878 15.8182H160.878C160.916 16.5303 161.094 17.1288 161.412 17.6136C161.73 18.0985 162.177 18.4659 162.753 18.7159C163.336 18.9659 164.029 19.0909 164.832 19.0909C165.507 19.0909 166.071 19.0076 166.526 18.8409C166.98 18.6742 167.325 18.4432 167.56 18.1477C167.795 17.8523 167.916 17.5152 167.923 17.1364C167.916 16.7803 167.798 16.4697 167.571 16.2045C167.351 15.9318 166.988 15.6894 166.48 15.4773C165.973 15.2576 165.287 15.053 164.423 14.8636L162.105 14.3636C160.045 13.9167 158.42 13.1705 157.23 12.125C156.048 11.072 155.461 9.63636 155.469 7.81818C155.461 6.34091 155.855 5.04924 156.651 3.94318C157.454 2.82954 158.563 1.96212 159.98 1.34091C161.404 0.719696 163.037 0.40909 164.878 0.40909C166.757 0.40909 168.382 0.723484 169.753 1.35227C171.124 1.98106 172.181 2.86742 172.923 4.01136C173.673 5.14773 174.052 6.47727 174.06 8H168.014ZM182.463 13.5909V5.20454H186.463C187.122 5.20454 187.687 5.32197 188.156 5.55682C188.626 5.79167 188.982 6.12121 189.224 6.54545C189.474 6.9697 189.599 7.4697 189.599 8.04545C189.599 8.62879 189.471 9.125 189.213 9.53409C188.955 9.94318 188.588 10.2576 188.111 10.4773C187.634 10.6894 187.062 10.7955 186.395 10.7955H183.759V9.06818H186.009C186.372 9.06818 186.649 8.98106 186.838 8.80682C187.027 8.63258 187.122 8.37879 187.122 8.04545C187.122 7.68939 187.027 7.42424 186.838 7.25C186.649 7.06818 186.372 6.97727 186.009 6.97727H184.872V13.5909H182.463ZM188.009 9.77273L189.804 13.5909H187.168L185.554 9.77273H188.009ZM185.827 18.5909C184.569 18.5909 183.391 18.3561 182.293 17.8864C181.194 17.4167 180.228 16.7652 179.395 15.9318C178.562 15.0985 177.91 14.1326 177.44 13.0341C176.971 11.9356 176.736 10.7576 176.736 9.5C176.736 8.24242 176.971 7.06439 177.44 5.96591C177.91 4.86742 178.562 3.90152 179.395 3.06818C180.228 2.23485 181.194 1.58333 182.293 1.11364C183.391 0.643939 184.569 0.40909 185.827 0.40909C187.084 0.40909 188.262 0.643939 189.361 1.11364C190.459 1.58333 191.425 2.23485 192.259 3.06818C193.092 3.90152 193.743 4.86742 194.213 5.96591C194.683 7.06439 194.918 8.24242 194.918 9.5C194.918 10.7576 194.683 11.9356 194.213 13.0341C193.743 14.1326 193.092 15.0985 192.259 15.9318C191.425 16.7652 190.459 17.4167 189.361 17.8864C188.262 18.3561 187.084 18.5909 185.827 18.5909ZM185.827 16.0455C187.039 16.0455 188.137 15.7538 189.122 15.1705C190.115 14.5795 190.902 13.7879 191.486 12.7955C192.077 11.803 192.372 10.7045 192.372 9.5C192.372 8.29545 192.077 7.19697 191.486 6.20454C190.902 5.21212 190.115 4.42424 189.122 3.84091C188.13 3.25 187.031 2.95454 185.827 2.95454C184.622 2.95454 183.524 3.25 182.531 3.84091C181.539 4.42424 180.747 5.21212 180.156 6.20454C179.573 7.19697 179.281 8.29545 179.281 9.5C179.281 10.7045 179.573 11.803 180.156 12.7955C180.747 13.7803 181.539 14.5682 182.531 15.1591C183.524 15.75 184.622 16.0455 185.827 16.0455Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
        <div className="flex items-center gap-8">
          <button
            className="flex items-center p-2 rounded-full hover:bg-[#333333] active:bg-[#2d2d2d]"
            onClick={() => (openCurr ? setOpenCurr(false) : setOpenCurr(true))}
          >
            <img
              src={currency === 'RUB' ? iconRU : iconUS}
              alt=""
              className="w-3 h-3 mr-2"
            />
            <span className="text-white mr-2">{currency}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 12 12"
              className={`opacity-40 ${
                openCurr ? 'rotate-180' : ''
              } transition-all duration-150`}
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="none"
                strokeLinecap="round"
                strokeWidth="1"
              >
                <path
                  stroke="#FFFFFF"
                  d="M1.405 8.375L5.905 3.625 10.405 8.375"
                  transform="rotate(180 5.905 6)"
                ></path>
              </g>
            </svg>
          </button>
          <ul
            className={`absolute ${
              openCurr ? '' : 'opacity-0 invisible'
            } z-10 w-56 bg-white mt-36 border duration-150 transition-all ease-in-out rounded-md`}
          >
            {currencyList.map((obj: any) => (
              <li
                key={obj.id}
                className="border-b flex items-center p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  dispatch(setItems(obj.value));
                  setOpenCurr(false);
                }}
              >
                <img src={obj.image} alt="" className="w-4 h-4 mr-2" />
                <p>{obj.country}</p>
                <span className="font-bold text-gray-300 absolute right-0 mr-2">
                  {obj.title}
                </span>
              </li>
            ))}
          </ul>
          <input
            type="text"
            className="outline-none w-96 pt-2 pb-2 bg-transparent text-white border-solid border-b opacity-50 p-2 focus:opacity-100 placeholder:text-white bg-[url('././assets/icons/search.svg')] bg-right bg-no-repeat bg-[length:24px_24px]"
            placeholder="Search..."
            ref={inputRef}
            onChange={onChangeInput}
            value={value}
          />
          <button
            className="rounded-full w-[50px] h-[50px] cursor-pointer hover:bg-[#333333] hover:scale-110 active:bg-[#2d2d2d]"
            onClick={() => (openWish ? setOpenWish(false) : setOpenWish(true))}
          >
            <svg
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              width="30px"
              className="m-auto"
            >
              <g id="SVGRepo_iconCarrier">
                <g id="Interface / Heart_01">
                  <path
                    id="Vector"
                    d="M12 7.69431C10 2.99988 3 3.49988 3 9.49991C3 15.4999 12 20.5001 12 20.5001C12 20.5001 21 15.4999 21 9.49991C21 3.49988 14 2.99988 12 7.69431Z"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
          <button
            className="rounded-full w-[50px] h-[50px] cursor-pointer hover:bg-[#333333] hover:scale-110 active:bg-[#2d2d2d]"
            onClick={() => (openCart ? setOpenCart(false) : setOpenCart(true))}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
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
                  d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11M20 7L18 3H6L4 7M20 7H4M20 7V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V7"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`fixed flex min-h-full top-0 z-[289] ${
          openCart ? 'right-0' : 'right-[-860px]'
        } transition-all duration-150`}
      >
        <button
          className="bg-white w-[50px] h-[50px] mt-3 mr-2 rounded-full border cursor-pointer"
          onClick={() => (openCart ? setOpenCart(false) : setOpenCart(true))}
        >
          <svg
            width="36px"
            height="36px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="m-auto hover:scale-110"
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
        <div className="bg-white text-center border-l w-[800px]">
          <h1 className="text-6xl font-bold p-16">IN CART (0)</h1>
          <ProductMini />
          <ProductMini />
        </div>
      </div>
      <div
        className={`fixed flex min-h-full top-0 ${
          openWish ? 'right-0' : 'right-[-860px]'
        } z-[289] transition-all duration-150`}
      >
        <button
          className="bg-white w-[50px] h-[50px] mt-3 mr-2 rounded-full border cursor-pointer "
          onClick={() => (openWish ? setOpenWish(false) : setOpenWish(true))}
        >
          <svg
            width="36px"
            height="36px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="m-auto hover:scale-110"
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
        <div className="bg-white text-center border-l w-[800px]">
          <h1 className="text-6xl font-bold p-16">IN WISHLIST (0)</h1>
          <ProductMini />
          <ProductMini />
        </div>
      </div>
    </header>
  );
};
