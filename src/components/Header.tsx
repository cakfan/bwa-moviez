import Image from "next/image";

export const Header = () => {
  return (
    <header className="bg-background pl-6 pt-[29px] pb-[30px] flex justify-between items-center">
      <div className="flex flex-col gap-[4px]">
        <h1 className="text-[28px] leading-[38px] font-bold">Moviez</h1>
        <span className="text-[16px] text-accent leading-[22px]">
          Watch much easier
        </span>
      </div>
      <button className="bg-button pl-[22px] pt-[11px] pr-[11px] pb-[12px] rounded-l-full h-[45px] w-[55px]">
        <Image
          src={`${
            process.env.NODE_ENV === "production" ? "/bwa-moviez" : ""
          }/icons/search.svg`}
          width={22}
          height={22}
          alt="Search icon"
        />
      </button>
    </header>
  );
};
