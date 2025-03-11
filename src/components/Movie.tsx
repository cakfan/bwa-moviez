import Image from "next/image";
import { StarRating } from "./StarRating";

const movies = [
  {
    title: "Mulan Session",
    genre: "History, War",
    ratings: 3,
    poster: "/poster/3.png",
  },
  {
    title: "Beauty & Beast",
    genre: "Sci-Fiction",
    ratings: 5,
    poster: "/poster/2.png",
  },
  {
    title: "John Wick 4",
    genre: "Action, Crime",
    ratings: 5,
    poster: "/poster/1.png",
  },
];

const Card = ({ title, genre, ratings, poster }: (typeof movies)[0]) => {
  return (
    <div className="flex gap-5 items-center">
      <div className="relative w-[100px] h-[127px] min-w-[100px] min-h-[127px] rounded-2xl overflow-hidden">
        <Image
          src={`${
            process.env.NODE_ENV === "production" ? "/bwa-moviez" : ""
          }${poster}`}
          alt={`${title} poster`}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-[20px] font-semibold">{title}</h2>
        <span className="text-[16px] text-accent mb-4">{genre}</span>
        <StarRating count={ratings} />
      </div>
    </div>
  );
};

export const Movie = () => {
  return (
    <div className="relative px-6 mt-5 pb-11">
      <div className="flex flex-col gap-[30px]">
        {movies.map((movie, index) => (
          <Card key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};
