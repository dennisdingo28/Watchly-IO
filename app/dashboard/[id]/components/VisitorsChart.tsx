"use client";
import { InfoText } from "@/components/InfoText";
import Chart from "react-apexcharts";

export const VisitorsChart = () => {
  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];
  const options = {
    chart: {
      id: "basic-bar",
      foreColor: "#514aa5",
      colors: ["#514aa5"],
    },
    colors: ["#776df2"],
    fill: {
      colors: ["#776df2", "#514aa5"],
    },
    dataLabels: {
      style: {
        colors: ["#776df2"],
      },
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    responsive: [
      {
        breakpoint: undefined,
        options: {},
      },
    ],
  };
  return (
    <div>
      <p className="text-4xl font-semibold">
        <InfoText>Visitors</InfoText>
      </p>

      <Chart
        options={options}
        series={series}
        type="area"
        className="w-full"
        height="400"
      />
    </div>
  );
};
