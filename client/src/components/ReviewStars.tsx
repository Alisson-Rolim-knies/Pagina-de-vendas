import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ReviewStarsProps = {
  rating: number;
  maxRating?: number;
}

export default function ReviewStars({ rating, maxRating = 5 }: ReviewStarsProps) {
  return (
    <div className="flex">
      {Array.from({ length: maxRating }).map((_, index) => (
        <FontAwesomeIcon 
          key={index} 
          icon="star" 
          className={index < rating ? "text-yellow-400" : "text-gray-300"} 
        />
      ))}
    </div>
  );
}
