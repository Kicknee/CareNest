import React from "react";
import Announcements from "@/components/Announcements";
import UserCard from "@/components/UserCard";
import KidCard from "@/components/KidCard";
import NannyCard from "@/components/NannyCard";

export default function BabysitterPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row">
      {/* LEFT */}
      <div className="flex w-full flex-col gap-8 lg:w-2/3">
        <div className="flex flex-wrap justify-between gap-4">
          <UserCard type={"booked"} />
          <UserCard type={"messages"} />
        </div>
        {/* MIDDLE */}
        <div className="flex flex-col justify-between gap-4 lg:flex-row">
          <NannyCard type="preview" />
          {/* FINANCE CHART*/}
        </div>
        <div className="flex w-full flex-wrap gap-4">
          <KidCard />
          <KidCard />
          <KidCard />
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex w-full flex-col gap-8 lg:w-1/3">
        <Announcements />
      </div>
    </div>
  );
}
