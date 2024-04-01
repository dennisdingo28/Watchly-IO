import { PlayCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { EditRecording } from "./EditRecording";
import Link from "next/link";

interface RecordingProps {
  userName: string;
  userEmail: string;
  userImage: string;
}

export const Recording = ({
  userName,
  userImage,
  userEmail,
}: RecordingProps) => {
  return (
    <div className="">
      <div className="flex gap-2.5">
        <Link href="/">
          <Image
            src="/about1.jpg"
            width={100}
            height={100}
            alt="video-thumbnail"
            className="border-2 object-cover max-w-[60px] max-h-[50px]"
          />
        </Link>

        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between">
            <Link href="/">
              <p className="text-sm">Recording 1</p>
            </Link>
            <EditRecording
              userImage={userImage}
              userName={userName}
              userEmail={userEmail}
            />
          </div>
          <Link href="/" className="flex items-center gap-2.5 text-darkGray">
            <PlayCircle className="w-[16px] h-[16px]" />
            <span className="text-sm">12:05 minutes</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
