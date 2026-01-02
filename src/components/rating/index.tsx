import {
  MdOutlineStar,
  MdOutlineStarBorder,
  MdOutlineStarHalf,
} from "react-icons/md";

interface RatingProps {
  rating: number;
}

export function Rating(props: RatingProps) {
  const stars = Array(5).fill(0);

  return (
    <>
      {stars.map((_, index) => {
        if (props.rating >= index + 1) {
          return <MdOutlineStar key={index} size={24} color="#eeb830" />;
        } else if (props.rating > index) {
          return <MdOutlineStarHalf key={index} size={24} color="#eeb830" />;
        } else {
          return <MdOutlineStarBorder key={index} size={24} color="#eeb830" />;
        }
      })}
    </>
  );
}
