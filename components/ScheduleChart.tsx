"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    amount: 4000,
  },
  {
    name: "Feb",
    amount: 3000,
  },
  {
    name: "Mar",
    amount: 2000,
  },
  {
    name: "Apr",
    amount: 2780,
  },
  {
    name: "May",
    amount: 1890,
  },
  {
    name: "Jun",
    amount: 2390,
  },
  {
    name: "Jul",
    amount: 3490,
  },
  {
    name: "Aug",
    amount: 3490,
  },
  {
    name: "Sep",
    amount: 3490,
  },
  {
    name: "Oct",
    amount: 3490,
  },
  {
    name: "Nov",
    amount: 3490,
  },
  {
    name: "Dec",
    amount: 2490,
  },
];

function ScheduleChart() {
  return (
    <div className="h-full w-full rounded-xl bg-white p-3">
      {/* TITLE */}
      <div>
        <h1 className="text-lg font-semibold">Appointments</h1>
      </div>
      {/* CHART */}
      <div className="h-[75%] w-full">
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend
              align="center"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "10px", paddingBottom: "40px" }}
            />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ScheduleChart;
