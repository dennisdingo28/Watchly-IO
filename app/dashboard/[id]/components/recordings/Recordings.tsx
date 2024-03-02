import React from "react";
import { Recording } from "./Recording";

interface RecordingsProps {
  userName: string;
  userEmail: string;
  userImage: string;
}

export const Recordings = ({
  userName,
  userEmail,
  userImage,
}: RecordingsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      <Recording
        userImage={userImage}
        userName={userName}
        userEmail={userEmail}
      />
      <Recording
        userImage={userImage}
        userName={userName}
        userEmail={userEmail}
      />
      <Recording
        userImage={userImage}
        userName={userName}
        userEmail={userEmail}
      />
      <Recording
        userImage={userImage}
        userName={userName}
        userEmail={userEmail}
      />
      <Recording
        userImage={userImage}
        userName={userName}
        userEmail={userEmail}
      />
      <Recording
        userImage={userImage}
        userName={userName}
        userEmail={userEmail}
      />
      <Recording
        userImage={userImage}
        userName={userName}
        userEmail={userEmail}
      />
      <Recording
        userImage={userImage}
        userName={userName}
        userEmail={userEmail}
      />
    </div>
  );
};
