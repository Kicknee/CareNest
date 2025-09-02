import React from "react";
import Image from "next/image";

export default function UserCard() {
  return (
    <div className="flex w-[170px] flex-col items-center justify-between gap-2 rounded-2xl bg-white p-10 text-black md:w-[230px]">
      <div className="relative size-[75px] md:size-[95px]">
        <Image src="/logo_m.png" alt="Logo" fill />
      </div>
      <div className="mt-3 text-center">
        <p className="text-base font-semibold">Chido Asun</p>
      </div>
    </div>
  );
}
