"use client"

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    age: "18-24",
    male: 15,
    female: 20,
    other: 2,
  },
  {
    age: "25-34",
    male: 25,
    female: 30,
    other: 3,
  },
  {
    age: "35-44",
    male: 20,
    female: 18,
    other: 2,
  },
  {
    age: "45-54",
    male: 10,
    female: 12,
    other: 1,
  },
  {
    age: "55-64",
    male: 5,
    female: 7,
    other: 1,
  },
  {
    age: "65+",
    male: 3,
    female: 4,
    other: 0,
  },
]

export function AudienceChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <XAxis dataKey="age" tickLine={false} axisLine={false} tickMargin={10} stroke="#888888" fontSize={12} />
          <YAxis tickLine={false} axisLine={false} tickMargin={10} stroke="#888888" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--background))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "0.5rem",
              boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            }}
          />
          <Bar dataKey="male" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={20} />
          <Bar dataKey="female" fill="#ec4899" radius={[4, 4, 0, 0]} barSize={20} />
          <Bar dataKey="other" fill="#10b981" radius={[4, 4, 0, 0]} barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

