import Rating from '../rating/Rating';
import Button from '../button/Button';

import type { Product } from '../../types/product';

import './styles.scss';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="product-detail">
      <div className="product-detail__content">
        <p className="product-detail__price">${product.price.toFixed(2)}</p>
        {/*<h2 className="title">{product.title}</h2>*/}
        <p className="product-detail__description">{product.description}</p>
        <Rating rate={product.rating.rate} count={product.rating.count} />
      </div>
      <div className="product-detail__actions">
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
}
