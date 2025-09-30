import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import './styles.scss';

interface ChevronProps {
  isActive: boolean;
}

const Chevron = ({ isActive }: ChevronProps) => {
  return (
    <ChevronLeftIcon
      className={`chevron ${isActive ? 'chevron--active' : ''}`}
    />
  );
};

export default Chevron;
