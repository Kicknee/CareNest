import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

export default function NannyCard() {
  return (
    <div className="flex h-[270px] w-[170px] flex-col items-center justify-between gap-2 rounded-2xl bg-white p-3 text-black">
      <Image src="/logo_m.png" alt="Logo" width={75} height={75} />
      <p className="text-base font-semibold">Chido Asun</p>
      <p className="text-sm capitalize">Warsaw</p>
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
      <button className="bg-accent rounded-4xl px-5 py-1.5 text-sm text-white">
        Book Now
      </button>
    </div>
  );
}
