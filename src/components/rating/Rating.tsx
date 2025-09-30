import './styles.scss';

interface RatingProps {
  rate: number;
  count?: number;
}

const Rating = ({ rate, count }: RatingProps) => {
  const fullStars = Math.floor(rate);
  const halfStar = rate - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="rating">
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={`full-${i}`} className="rating__star full">
          ★
        </span>
      ))}

      {halfStar && <span className="rating__star half">★</span>}

      {Array.from({ length: emptyStars }).map((_, i) => (
        <span key={`empty-${i}`} className="rating__star empty">
          ★
        </span>
      ))}

      {count && <span className="rating__count">({count})</span>}
    </div>
  );
};

export default Rating;
