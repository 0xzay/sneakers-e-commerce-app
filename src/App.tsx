import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Products } from './components/Products';
import { ProductsHeader } from './components/ProductsHeader';
import { Provider } from 'react-redux';
import { store, useAppDispatch } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <ProductsHeader />
      <Products />
      <Footer />
    </Provider>
  );
};

export default App;
