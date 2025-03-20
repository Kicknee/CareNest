import Link from "next/link";
import React from "react";
import Image from "next/image";
import Menu from "@/components/Menu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-between h-screen max-w-[1300px] mx-auto">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-amber-100 p-3">
        <Link href="/" className="flex items-center lg:justify-start gap-2">
          <Image src="logo.svg" alt="logo" width={53} height={53} />
          <span className="hidden lg:block">CareNest</span>
        </Link>
        <Menu />
      </div>
      {children}
      {/* <div className="w-[86%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-amber-300">right</div> */}
    </div>
  );
}
