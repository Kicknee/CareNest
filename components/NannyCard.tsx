import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

export default function NannyCard() {
  return (
    <div className="bg-white rounded-2xl p-3 w-[170px] h-[270px] flex flex-col items-center justify-between text-black gap-2">
      <Image src="/logo_m.png" alt="Logo" width={75} height={75} />
      <p className="text-base font-semibold">Chido Asun</p>
      <p className="capitalize text-sm">Warsaw</p>
      <div>
        <p className="capitalize text-xs">{"Experience: >4 years"}</p>
        <p className="capitalize text-xs mt-1">PLN 35.00/hr</p>
      </div>
      <div className="flex text-xs font-semibold items-center gap-1">
        <AiFillStar size={20} className="text-accent" />
        <AiFillStar size={20} className="text-accent" />
        <AiFillStar size={20} className="text-accent" />
        <AiFillStar size={20} className="text-gray-200" />
        <AiFillStar size={20} className="text-gray-200" />
        (23)
      </div>
      <button className="rounded-4xl px-5 py-1.5 text-sm bg-accent text-white">
        Book Now
      </button>
    </div>
  );
}
