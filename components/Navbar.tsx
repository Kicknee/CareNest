import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="bg-secondary sticky top-0 z-50 flex w-full items-center justify-end p-5 shadow-lg">
      <div className="flex gap-2">
        <div className="flex flex-col text-end">
          <span className="text-lg">John Doe</span>
          <span className="text-xs text-gray-500">Admin</span>
        </div>
        <IoPersonCircleOutline className="text-accent size-[41px]" />
      </div>
    </div>
  );
}
