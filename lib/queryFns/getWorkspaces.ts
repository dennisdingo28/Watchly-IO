import { Workspace } from "@prisma/client";
import axios from "axios";

export const getWorkspaces = async () => {
  const res = await axios.get("/api/queryFns/workspaces");
  return res.data as Workspace[];
};
