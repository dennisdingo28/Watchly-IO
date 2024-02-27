import { Workspace } from "@prisma/client";

export const getWorkspaces = async () => {
  const res = await fetch("http://localhost:3000/api/queryFns/workspaces");
      const json = await res.json();
      
      return json as Workspace[];
};
