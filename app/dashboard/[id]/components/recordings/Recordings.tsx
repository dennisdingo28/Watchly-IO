import React from "react";
import { Recording } from "./Recording";

export const Recordings = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      <Recording />
      <Recording />
      <Recording />
      <Recording />
      <Recording />
      <Recording />
      <Recording />
      <Recording />
    </div>
  );
};
