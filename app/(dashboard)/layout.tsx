import Link from "next/link";
import React from "react";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col bg-gray-100 text-gray-800">
      <Navbar />

      <div className="mx-auto flex w-full max-w-[1300px] flex-1 overflow-hidden">
        <aside className="bg-secondary /* STICKY tylko na dużych ekranach */ hidden w-[16%] overflow-y-auto p-3 sm:block md:w-[10%] lg:sticky lg:top-0 lg:h-[calc(100vh-64px)] lg:w-[16%] xl:w-[14%]">
          <Menu />
        </aside>
        <main className="flex-1 overflow-auto p-4">{children}</main>
      </div>
    </div>
  );
}
