import { Workspace } from "@prisma/client";

export const getWorkspaces = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/queryFns/workspaces`,
    { cache: "no-cache" }
  );
  const json = await res.json();
  console.log("josn", json);

  return json as Workspace[];
};
