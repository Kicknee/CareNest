import React, { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-between h-screen max-w-[1300px] mx-auto">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-amber-100 ">
        left
      </div>
      {children}
      {/* <div className="w-[86%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-amber-300">right</div> */}
    </div>
  );
}
