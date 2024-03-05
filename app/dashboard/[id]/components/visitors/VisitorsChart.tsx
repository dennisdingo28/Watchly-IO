"use client";
import { InfoText } from "@/components/InfoText";
import { WorkspaceUser } from "@prisma/client";
import Chart from "react-apexcharts";

export const VisitorsChart = ({ visitors }: { visitors: WorkspaceUser[] }) => {
  // Extract createdAt values from the visitors array
  const createdAtData = visitors.map((visitor) => visitor.createdAt);

  // Initialize monthlyVisitors array with zeros for each month
  const monthlyVisitors: number[] = Array(12).fill(0);

  // Count the number of visitors for each month
  createdAtData.forEach((createdAt) => {
    const month = new Date(createdAt).getMonth();
    
    monthlyVisitors[month]++;
  });

  const series = [
    {
      name: "Visitors",
      data: monthlyVisitors,
    },
  ];

  const options = {
    chart: {
      id: "basic-bar",
      foreColor: "#514aa5",
      colors: ["#514aa5"],
    },
    grid: {
      row: {
        colors: undefined,
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    colors: ["#776df2"],
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#776df2"],
      },
    },
    xaxis: {
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
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
      <p className="text-4xl font-semibold mb-2.5">
        <InfoText>Monthly Visitors</InfoText>
      </p>

      <Chart
        options={options}
        series={series}
        type="area"
        className="w-full"
        height="500"
      />
    </div>
  );
};
