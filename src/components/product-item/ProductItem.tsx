import Chevron from '../chevron/Chevron';
import type { Product } from '../../types/product';
import './styles.scss';

interface ProductItemProps {
  product: Product;
  isActive: boolean;
  onSelect: () => void;
}

export default function ProductItem({
  product,
  isActive,
  onSelect,
}: ProductItemProps) {
  return (
    <div className={`product-item ${isActive ? 'active' : ''}`} role="button" tabIndex={0} onClick={onSelect}>
      <img
        className="product-item__image"
        src={product.image}
        alt={product.title}
      />
      <h4 className="product-item__title">{product.title}</h4>
      <Chevron isActive={isActive} />
    </div>
  );
}
