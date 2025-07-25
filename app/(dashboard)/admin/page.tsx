import UserCard from "@/components/UserCard";
import React from "react";
import CountUsersChart from "@/components/CountUsersChart";
import ScheduleChart from "@/components/ScheduleChart";
import Announcements from "@/components/Announcements";

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
        <div className="flex flex-col justify-between gap-4 lg:flex-row">
          {/* USERS COUNT */}
          <div className="h-[450px] w-full lg:w-1/3">
            <CountUsersChart />
          </div>
          <div className="h-[450px] w-full lg:w-1/3">
            <CountUsersChart />
          </div>
          <div className="h-[450px] w-full lg:w-1/3">
            <CountUsersChart />
          </div>
        </div>
        {/* BOTTOM CHARTS */}
        <div className="h-[500px] w-full">
          {/* SCHEDULE COUNT */}
          <ScheduleChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex w-full flex-col gap-8 lg:w-1/3">
        <Announcements />
      </div>
    </div>
  );
}
