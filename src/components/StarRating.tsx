import Image from "next/image";

export const StarRating = ({ count }: { count: number }) => {
  return (
    <div className="flex h-[18px] gap-[4px]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Image
          key={index}
          width={18}
          height={18}
          src={`${
            process.env.NODE_ENV === "production" ? "/bwa-moviez" : ""
          }/icons/${index < count ? "star-filled" : "star-empty"}.svg`}
          alt="star"
          className="w-4 h-4"
        />
      ))}
    </div>
  );
};
