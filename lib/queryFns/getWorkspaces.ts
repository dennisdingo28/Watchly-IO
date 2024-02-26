import { Workspace } from "@prisma/client";
import axios from "axios";

export const getWorkspaces = async () => {
  const { data } = await axios.get("/api/queryFns/workspaces");
  return data as Workspace[];
};
