import { Workspace } from "@prisma/client";

export const getWorkspaces = async () => {
  const res = await fetch(`https://watchly-io.vercel.app/api/queryFns/workspaces`, {next:{revalidate:0}});
      const json = await res.json();
      
      return json as Workspace[];
};
