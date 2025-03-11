import Image from "next/image";
import { StarRating } from "./StarRating";
import Link from "next/link";

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
];

const Card = ({ title, genre, ratings, poster }: (typeof movies)[0]) => {
  return (
    <Link href={"#"} className="flex gap-5 items-center">
      <div className="relative w-[100px] h-[127px]">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[82px] h-[16px] bg-[#169E9F]/40 blur-[30px] rounded-full" />
        <div className="relative min-w-[100px] min-h-[127px] rounded-[21px] overflow-hidden">
          <Image
            src={`${
              process.env.NODE_ENV === "production" ? "/bwa-moviez" : ""
            }${poster}`}
            alt={`${title} poster`}
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-[20px] line-clamp-1 font-semibold">{title}</h2>
        <span className="text-[16px] text-accent mb-4">{genre}</span>
        <StarRating count={ratings} />
      </div>
    </Link>
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
