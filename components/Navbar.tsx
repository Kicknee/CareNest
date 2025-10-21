import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="bg-secondary sticky top-0 z-50 flex w-full items-center justify-between p-5 shadow-lg">
      <Link href="/" className="flex items-center gap-2 lg:justify-start">
        <Image src="/logo_s.png" alt="logo" width={53} height={53} />
        <span className="hidden text-[21px] font-semibold text-white lg:block">
          Carenest
        </span>
      </Link>
      <div className="flex gap-2 text-white">
        <div className="flex flex-col text-end font-bold">
          <span className="text-lg">John Doe</span>
          <span className="text-xs">Admin</span>
        </div>
        <IoPersonCircleOutline className="size-[41px]" />
      </div>
    </div>
  );
}
