import { Badge } from "@/components/ui/badge";
import { BarChart3, CalendarPlus2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Project = () => {
  return (
    <Link
      href="/"
      className="p-5 rounded-md border-2 border-lightGray hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between">
        <h1 className="upc">Project 1</h1>
        <Badge className="bg-[#f0fdf4] text-[#15803d] border-2 border-[#c4ebd2]">
          active
        </Badge>
      </div>

      <div className="flex items-center gap-5 mt-5">
        <div className="flex items-center gap-2 text-darkGray">
          <CalendarPlus2 className="w-[14px] h-[14px]" />
          <span className="text-xs whitespace-nowrap">Nov, 09, 2024</span>
        </div>
        <div className="flex items-center gap-2 text-darkGray">
          <BarChart3 className="w-[14px] h-[14px]" />
          <span className="text-xs whitespace-nowrap">Tracking</span>
        </div>
      </div>
    </Link>
  );
};
