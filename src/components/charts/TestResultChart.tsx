import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

interface ResultChartProps {
  data: { category: string; score: number }[];
}

export const TestResultChart: React.FC<ResultChartProps> = ({ data }) => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="category" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Bar dataKey="score" fill="#6366f1" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
