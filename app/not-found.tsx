"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const rainDrops = [
  11, 12, 10, 14, 18, 16, 19, 20, 19, 10, 16, 14, 18, 11, 13, 15, 12, 17, 13,
  15,
];

function NotFound() {
  const navigate = useRouter();

  useEffect(() => {
    setTimeout(() => {
      navigate.push("/");
    }, 3000);
  }, [navigate]);

  return (
    <main className="flex min-h-screen w-full items-center justify-center text-white">
      <div className="h-[450px] w-[200px]">
        <div className="absolute translate-x-5 -translate-y-20 text-center text-7xl">
          <span className="text-red-600">#</span>404
        </div>
        <div className="relative h-[70px] w-full rounded-4xl bg-white before:absolute before:block before:size-[90px] before:translate-x-[90px] before:-translate-y-[30px] before:rounded-full before:bg-white after:absolute after:block after:size-[70px] after:translate-x-[40px] after:-translate-y-[20px] after:rounded-full after:bg-white"></div>
        <div className="relative flex justify-between px-5">
          {rainDrops.map((i, index) => (
            <span
              key={index}
              className="animate-fall size-[5px] rounded-full bg-red-100"
              style={{ "--i": i } as React.CSSProperties}
            ></span>
          ))}
        </div>
      </div>
    </main>
  );
}

export default NotFound;
