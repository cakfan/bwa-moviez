import Image from "next/image";
import { StarRating } from "./StarRating";

const featuredMovies = [
  {
    title: "John Wick 4",
    genre: "Action, Crime",
    ratings: 5,
    poster: "/poster/1.png",
  },
  {
    title: "Mulan Session",
    genre: "History, War",
    ratings: 3,
    poster: "/poster/3.png",
  },
  {
    title: "Beuty & Beast",
    genre: "Sci-Fiction",
    ratings: 5,
    poster: "/poster/2.png",
  },
];

const Card = ({
  title,
  genre,
  ratings,
  poster,
}: (typeof featuredMovies)[0]) => {
  return (
    <div className="shrink-0 relative">
      <div className="flex flex-col gap-4 rounded-lg w-[300px] h-[279px] shadow-md">
        <div className="relative w-full h-[200px]">
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[244px] h-[23px] bg-[#5E38E5]/40 blur-lg rounded-full" />
          <div className="relative w-full h-full overflow-hidden rounded-2xl">
            <Image
              src={`${
                process.env.NODE_ENV === "production" && "/bwa-moviez"
              }${poster}`}
              alt={`${title} poster`}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex justify-between items-center px-2">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">{title}</h2>
            <span className="text-sm text-gray-500">{genre}</span>
          </div>
          <StarRating count={ratings} />
        </div>
      </div>
    </div>
  );
};

export const Featured = () => {
  return (
    <div className="relative overflow-x-auto scrollbar-hide w-full">
      <div className="flex gap-6 flex-nowrap scroll-smooth pl-6 mr-6">
        {featuredMovies.map((movie, index) => (
          <Card key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};
