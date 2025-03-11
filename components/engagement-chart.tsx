"use client"

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    date: "Jan",
    instagram: 2500,
    twitter: 1800,
    linkedin: 1200,
    facebook: 2200,
  },
  {
    date: "Feb",
    instagram: 3000,
    twitter: 2000,
    linkedin: 1500,
    facebook: 2400,
  },
  {
    date: "Mar",
    instagram: 2800,
    twitter: 1900,
    linkedin: 1700,
    facebook: 2100,
  },
  {
    date: "Apr",
    instagram: 3500,
    twitter: 2200,
    linkedin: 2000,
    facebook: 2700,
  },
  {
    date: "May",
    instagram: 3200,
    twitter: 2100,
    linkedin: 1800,
    facebook: 2500,
  },
  {
    date: "Jun",
    instagram: 3800,
    twitter: 2500,
    linkedin: 2200,
    facebook: 2900,
  },
]

export function EngagementChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={10} stroke="#888888" fontSize={12} />
          <YAxis tickLine={false} axisLine={false} tickMargin={10} stroke="#888888" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--background))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "0.5rem",
              boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            }}
          />
          <Line
            type="monotone"
            dataKey="instagram"
            stroke="#E1306C"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="twitter"
            stroke="#1DA1F2"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="linkedin"
            stroke="#0077B5"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="facebook"
            stroke="#4267B2"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

