"use client";
import { InfoText } from "@/components/InfoText";
import { Route, WorkspaceUser } from "@prisma/client";
import Chart from "react-apexcharts";

export const VisitedRoutesChart = ({
  visitedRoutes,
}: {
  visitedRoutes: Array<Route>;
}) => {
  // Initialize an array to store route names and visitor counts
  const routeData: { name: string; visitors: number }[] = [];

  // Iterate through visited routes and aggregate visitor counts for each route
  visitedRoutes.forEach((route) => {
    const { pathname, visited } = route;
    routeData.push({ name: pathname, visitors: visited });
  });

  // Sort routeData by visitor count in descending order
  routeData.sort((a, b) => b.visitors - a.visitors);

  // Extract route names and visitor counts for chart data
  const routeNames = routeData.map((data) => data.name);
  const routeVisitorCounts = routeData.map((data) => data.visitors);

  // Chart data series
  const series = [
    {
      name: "Visitors",
      data: routeVisitorCounts,
    },
  ];

  // Chart options
  const options = {
    chart: {
      id: "visited-routes",
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
      categories: routeNames,
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
        <InfoText>Comparison of Visited Routes</InfoText>
      </p>
      <Chart
        options={options}
        series={series}
        type="bar"
        className="w-full"
        height="500"
      />
    </div>
  );
};
