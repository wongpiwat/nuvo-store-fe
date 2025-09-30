import { useProducts } from './hooks/useProducts';
import ProductList from './components/product-list/ProductList';
import './App.scss';

function App() {
  const { products, loading } = useProducts(10);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__header">
          <h1 className="app__heading">Heading</h1>
          <div className="app__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            architecto neque illum eius error, totam mollitia reiciendis
            officiis quis magnam?
          </div>
        </div>
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default App;
