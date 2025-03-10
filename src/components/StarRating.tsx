import { Icons } from "./Icon";

export const StarRating = ({ count }: { count: number }) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <Icons.star
          key={index}
          fillColor={index < count ? "#FFAB2E" : "#E1E1EA"}
        />
      ))}
    </div>
  );
};
