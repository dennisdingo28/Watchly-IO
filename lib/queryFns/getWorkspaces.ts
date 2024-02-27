import { Workspace } from "@prisma/client";

export const getWorkspaces = async () => {
  const res = await fetch(`${process.env.APP_URL}/api/queryFns/workspaces`);
      const json = await res.json();
      console.log("josn", json);
      
      return json as Workspace[];
};
