"use client";

import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    uv: 172,
    fill: "white",
  },
  {
    name: "Boys",
    uv: 79,
    fill: "#fae27c",
  },
  {
    name: "Girls",
    uv: 93,
    fill: "#cfceff",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

function CountUsersChart() {
  return (
    <div className="h-full w-full rounded-xl bg-white p-3">
      {/* TITLE */}
      <div>
        <h1 className="text-lg font-semibold">Kids</h1>
      </div>
      {/* CHART */}
      <div className="h-[75%] w-full">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="uv" />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div>
          <div className="bg-carePurple h-5 w-5 rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Girls</h2>
        </div>
        <div>
          <div className="bg-careYellow h-5 w-5 rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Boys</h2>
        </div>
      </div>
    </div>
  );
}

export default CountUsersChart;
