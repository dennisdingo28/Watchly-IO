"use client";

import { copyText } from "@/lib/utils";
import { Copy, CopyCheck } from "lucide-react";
import { useState } from "react";

export const ProjectApiKey = ({ apiKey }: { apiKey: string }) => {
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <div
      className="mt-3 flex flex-wrap gap-2 items-center"
      onClick={() => copyText(apiKey).then(()=>setCopied(true)).finally(()=>setTimeout(()=>setCopied(false),2000))}
    >
      <p className={`text-xs text-center ${copied ? "text-black":"text-darkGray"}`}>{apiKey}</p>
      {!copied ? (
        <Copy className="w-4 h-4 text-purple" />
      ) : (
        <CopyCheck className="w-4 h-4 text-purple" />
      )}
    </div>
  );
};
