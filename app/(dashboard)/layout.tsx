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
    <div className="flex h-screen max-w-[1300px] mx-auto">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-secondary p-3 text-white">
        <Link href="/" className="flex items-center lg:justify-start gap-2">
          <Image src="/logo_s.png" alt="logo" width={53} height={53} />
          <span className="hidden lg:block text-[21px]">CareNest</span>
        </Link>
        <Menu />
      </div>

      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-y-scroll ">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
