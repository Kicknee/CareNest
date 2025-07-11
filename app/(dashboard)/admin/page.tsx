import UserCard from "@/components/UserCard";
import React from "react";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row">
      {/* LEFT */}
      <div className="flex w-full flex-col gap-8 lg:w-2/3">
        {/* CARD */}
        <div className="flex flex-wrap justify-between gap-4">
          <UserCard type={"babysitter"} />
          <UserCard type={"parent"} />
          <UserCard type={"kid"} />
        </div>
        {/* MIDDLE CHARTS */}
        <div></div>
      </div>
      {/* RIGHT */}
      <div className="flex w-full flex-col gap-8 lg:w-1/3">RIGHT</div>
    </div>
  );
}
