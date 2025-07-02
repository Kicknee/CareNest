import Link from "next/link";
import React from "react";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto flex h-screen max-w-[1300px] bg-gray-100 text-gray-800">
      <div className="bg-secondary w-[16%] p-3 md:w-[10%] lg:w-[16%] xl:w-[14%]">
        <Link href="/" className="flex items-center gap-2 lg:justify-start">
          <Image src="/logo_s.png" alt="logo" width={53} height={53} />
          <span className="hidden text-[21px] text-white lg:block">
            Carenest
          </span>
        </Link>
        <Menu />
      </div>

      <div className="w-[84%] overflow-y-scroll md:w-[90%] lg:w-[84%] xl:w-[86%]">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
