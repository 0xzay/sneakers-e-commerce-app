import React from 'react';
import { Product } from '../Product';
import { useAppDispatch } from '../../redux/store';
import { fetchSneakers } from '../../redux/sneakers/asyncActions';
import { useSelector } from 'react-redux';
import { selectSneakersData } from '../../redux/sneakers/selectors';
import ProductSkeleton from '../Product/skeleton';
import { selectFilters } from '../../redux/filters/selectors';
import { getUsdPrice } from '../../utils/getUsdPrice';
import { NotProducts } from '../NotProducts';

export const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectSneakersData);
  const [usdPrice, setUsdPrice] = React.useState(0);
  const { brandFilter, colorFilter, currentPage, sort, searchValue } =
    useSelector(selectFilters);
  const brand = brandFilter;
  const color = colorFilter;
  const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
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
        currentPage: String(currentPage),
      })
    );
  };

  React.useEffect(() => {
    getUsdPrice().then(res => setUsdPrice(res));
    getSneakers();
  }, [sortBy, order, brand, color]);

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
