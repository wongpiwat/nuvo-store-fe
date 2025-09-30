import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import type { Product } from '../../types/product';
import './styles.scss';

interface ProductCardProps {
  product: Product;
  isActive: boolean;
  onSelect: () => void;
}

export default function ProductItem({
  product,
  isActive,
  onSelect,
}: ProductCardProps) {
  return (
    <div
      className={`product-card ${isActive ? 'active' : ''}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
    >
      <img
        src={product.image}
        alt={product.title}
        className="product-card__image"
      />
      <h4 className="product-card__title">{product.title}</h4>
      <ChevronLeftIcon className={`chevron ${isActive ? 'chevron--active' : ''}`} />
    </div>
  );
}
