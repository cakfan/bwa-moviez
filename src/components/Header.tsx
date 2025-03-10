import { Icons } from "./Icon";

export const Header = () => {
  return (
    <header className="bg-background pl-6 py-[29] flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <h1 className="text-[28px] font-black">Moviez</h1>
        <span className="text-[16px] text-accent">Watch much easier</span>
      </div>
      <button className="bg-button pl-[22px] pt-[11px] pr-[11px] pb-[12px] rounded-l-full h-[45px] w-[55px]">
        <Icons.search />
      </button>
    </header>
  );
};
