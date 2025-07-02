import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="flex items-center justify-end p-5">
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
