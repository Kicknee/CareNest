import React from "react";

export default function UserCard({ type }: { type: string }) {
  return (
    <div className="min-w-[170px] flex-1 rounded-2xl bg-white p-4 shadow-xl">
      <h2 className="text-sm capitalize">{type}s</h2>
      <h1 className="my-4 text-2xl font-semibold">1,234</h1>
    </div>
  );
}
