"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { StarRating } from "./StarRating";

import "swiper/css";
import Link from "next/link";

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
    title: "Beauty & Beast",
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
    <Link href={"#"} className="shrink-0 relative w-[300px] h-[279px]">
      <div className="flex flex-col gap-[19px]">
        <div className="relative w-full h-[200px]">
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[244px] h-[23px] bg-[#5E38E5]/40 blur-[40px] rounded-full" />
          <div className="relative w-full h-full overflow-hidden rounded-[21px]">
            <Image
              src={`${
                process.env.NODE_ENV === "production" ? "/bwa-moviez" : ""
              }${poster}`}
              alt={`${title} poster`}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex justify-between items-center px-2">
          <div className="flex flex-col gap-[4px]">
            <h2 className="text-[20px] line-clamp-1 leading-[27px] font-semibold">
              {title}
            </h2>
            <span className="text-[16px] leading-[22px] text-accent">
              {genre}
            </span>
          </div>
          <StarRating count={ratings} />
        </div>
      </div>
    </Link>
  );
};

export const Featured = () => {
  return (
    <div className="relative w-full">
      <Swiper spaceBetween={24} slidesPerView="auto" className="!pl-6 !pr-6">
        {featuredMovies.map((movie, index) => (
          <SwiperSlide key={index} className="!w-[300px]">
            <Card {...movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
