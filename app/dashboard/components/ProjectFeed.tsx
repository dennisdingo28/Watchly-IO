import React from "react";
import { Project } from "./Project";

export const ProjectFeed = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
};
