import React from "react";

export default function UserCard({ type }: { type: string }) {
  return (
    <div className="odd:bg-carePurple even:bg-careYellow rounded-2xl p-4 flex-1 min-w-[130px]">
      <span className="bg-white px-2 py-1 rounded-full text-[10px] text-gray-600">
        20/24/25
      </span>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-sm text-gray-400">{type}s</h2>
    </div>
  );
}
