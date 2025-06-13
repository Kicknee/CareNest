import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

export default function NannyCard() {
  return (
    <div className="flex h-[270px] w-[170px] flex-col items-center justify-between gap-2 rounded-2xl bg-white p-3 text-black md:h-[360px] md:w-[230px]">
      <div className="relative size-[75px] md:size-[95px]">
        <Image src="/logo_m.png" alt="Logo" fill />
      </div>
      <div className="text-center">
        <p className="text-base font-semibold">Chido Asun</p>
        <p className="text-sm capitalize">Warsaw</p>
      </div>
      <div>
        <p className="text-xs capitalize">{"Experience: >4 years"}</p>
        <p className="mt-1 text-xs capitalize">PLN 35.00/hr</p>
      </div>
      <div className="flex items-center gap-1 text-xs font-semibold">
        <AiFillStar size={20} className="text-accent" />
        <AiFillStar size={20} className="text-accent" />
        <AiFillStar size={20} className="text-accent" />
        <AiFillStar size={20} className="text-gray-200" />
        <AiFillStar size={20} className="text-gray-200" />
        (23)
      </div>
      <button className="bg-accent rounded-4xl px-5 py-1.5 text-sm text-white md:px-6 md:py-2">
        Book Now
      </button>
    </div>
  );
}
