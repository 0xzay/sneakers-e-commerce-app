import React from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { Product } from '../Product';
import { useAppDispatch } from '../../redux/store';
import { fetchSneakers } from '../../redux/sneakers/asyncActions';
import { useSelector } from 'react-redux';
import { selectSneakersData } from '../../redux/sneakers/selectors';
import ProductSkeleton from '../Product/skeleton';
import { selectFilters } from '../../redux/filters/selectors';
import { getUsdPrice } from '../../utils/getUsdPrice';
import { SearchSneakersParams } from '../../redux/sneakers/types';
import { sortList } from '../Sort';
import { setFilters } from '../../redux/filters/slice';
import { selectCurrency } from '../../redux/currency/selectors';

export const Products: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectSneakersData);
  const [usdPrice, setUsdPrice] = React.useState(0);
  const currency = useSelector(selectCurrency);
  const isMounted = React.useRef(false);
  const { brandFilter, colorFilter, currentPage, sort, searchValue } =
    useSelector(selectFilters);
  const brand = brandFilter;
  const color = colorFilter;
  const order =
    sort.sortProperty === ''
      ? ''
      : sort.sortProperty.includes('-')
      ? 'asc'
      : 'desc';
  const sortBy = sort.sortProperty.replace('-', '');
  const search = searchValue;

  const getSneakers = async () => {
    dispatch(
      fetchSneakers({
        sortBy,
        order,
        brand,
        search,
        color,
        currentPage,
      })
    );
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const params = {
        sort: sort.sortProperty === '' ? null : sort.sortProperty,
        brand: brandFilter === '' ? null : brandFilter,
        color: colorFilter === '' ? null : colorFilter,
        search: searchValue === '' ? null : searchValue,
        currency: currency.currency,
      };

      const queryString = qs.stringify(params, { skipNulls: true });
      navigate(`/?${queryString}`);
    }
    getUsdPrice().then(res => setUsdPrice(res));
    getSneakers();
    isMounted.current = true;
  }, [sortBy, order, brand, color, searchValue, currency]);

  const products = items.map((obj: any) => (
    <Product key={obj.id} usdPrice={usdPrice} {...obj} />
  ));
  const skeletons = [...new Array(8)].map((_, index) => (
    <ProductSkeleton key={index} />
  ));

  return (
    <main className="">
      {status === 'error' ? (
        <div className="text-center p-64">
          <h1 className="text-6xl font-bold">Error 😞</h1>
          <p className="text-2xl mt-4">
            Sorry, there was an error when receiving the data.
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap w-full h-full gap-1 mb-32">
          {status === 'loading' ? skeletons : products}
        </div>
      )}
    </main>
  );
};
