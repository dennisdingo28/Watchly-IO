"use client";
import { OpenModal } from "@/components/modals/OpenModal";
import { Badge } from "@/components/ui/badge";
import { useModal } from "@/hooks/use-modal";
import { formatDate } from "@/lib/formatDate";
import { BarChart3, CalendarPlus2 } from "lucide-react";
import Link from "next/link";
import { HiDotsHorizontal } from "react-icons/hi";

export const Workspace = ({
  name,
  id,
  createdAt,
  userName,
  userEmail,
  userImage,
}: {
  name: string;
  id: string;
  createdAt: Date;
  userName: string;
  userEmail: string;
  userImage: string;
}) => {
  // const { onOpen } = useModal();

  // const handleDotsClick = (e: any) => {
  //   e.stopPropagation();
  //   onOpen("deleteWorkspace");
  // };

  return (
    <div
      // href={`/dashboard/${id}`}
      className="p-5 rounded-md border-2 border-lightGray hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between">
        <h1 className="tracking-tight">{name}</h1>
        <div className="flex items-center gap-2.5">
          <Badge className="bg-[#f0fdf4] text-[#15803d] border-2 border-[#c4ebd2]">
            active
          </Badge>
          <OpenModal
            type="deleteWorkspace"
            data={{
              workspaceId: id,
              user: {
                email: userEmail,
                name: userName,
                image: userImage,
              },
            }}
          >
            <HiDotsHorizontal className="text-darkGray text-xl cursor-pointer z-50" />
          </OpenModal>
        </div>
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
    </div>
  );
};
