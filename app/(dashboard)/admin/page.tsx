import UserCard from "@/components/UserCard";
import React from "react";

export default function AdminPage() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* CARD */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type={"babysitter"} />
          <UserCard type={"parent"} />
        </div>
        {/* MIDDLE CHARTS */}
        <div></div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">RIGHT</div>
    </div>
  );
}
