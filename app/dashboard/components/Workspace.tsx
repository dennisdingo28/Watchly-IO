"use client";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/formatDate";
import { BarChart3, CalendarPlus2 } from "lucide-react";
import Link from "next/link";

export const Workspace = ({
  name,
  id,
  createdAt,
}: {
  name: string;
  id: string;
  createdAt: Date;
}) => {
  return (
    <Link
      href={`/dashboard/${id}`}
      className="p-5 rounded-md border-2 border-lightGray hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between">
        <h1 className="upc">{name}</h1>
        <Badge className="bg-[#f0fdf4] text-[#15803d] border-2 border-[#c4ebd2]">
          active
        </Badge>
      </div>

      <div className="flex items-center gap-5 mt-5">
        <div className="flex items-center gap-2 text-darkGray">
          <CalendarPlus2 className="w-[14px] h-[14px]" />
          <span className="text-xs whitespace-nowrap">
            {formatDate(createdAt)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-darkGray">
          <BarChart3 className="w-[14px] h-[14px]" />
          <span className="text-xs whitespace-nowrap">Tracking</span>
        </div>
      </div>
    </Link>
  );
};
