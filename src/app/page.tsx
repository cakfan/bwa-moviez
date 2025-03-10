import { Featured } from "@/components/Featured";
import { Header } from "@/components/Header";
import { Movie } from "@/components/Movie";

export default function Home() {
  return (
    <div className="w-full relative">
      <Header />
      <Featured />
      <h3 className="text-[24px] font-black mx-6 mt-[30px]">From Disney</h3>
      <Movie />
    </div>
  );
}
