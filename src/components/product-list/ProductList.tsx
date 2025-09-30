import { useState } from 'react';

import type { Product } from '../../types/product';

import ProductItem from '../product-item/ProductItem';
import ProductDetail from '../product-detail/ProductDetail';
import './styles.scss';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelectProduct = (index: number, product: Product) => {
    console.log('[DEBUG] onSelectProduct:', JSON.stringify(product, null, 2));
    setActiveIndex(index);
  };

  return (
    <div className="product">
      <div className="product__list">
        {products.map((product, index) => (
          <ProductItem
            key={product.id}
            product={product}
            isActive={index === activeIndex}
            onSelect={() => onSelectProduct(index, product)}
          />
        ))}
      </div>

      <div className="product__detail">
        <ProductDetail product={products[activeIndex]} />
      </div>
    </div>
  );
}
