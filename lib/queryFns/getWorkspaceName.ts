import { Workspace } from "@prisma/client";
import axios from "axios";

export const getWorkspaceName = async (workspaceId:string) => {
  const res = await axios.get(`/api/queryFns/workspaceName/${workspaceId}`);
  return res.data as Workspace;
};
