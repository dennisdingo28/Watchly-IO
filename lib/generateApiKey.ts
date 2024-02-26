export function generateApiKey() {
  const uniqueID = crypto.randomUUID();
  const formattedID = uniqueID.replace(/-/g, "");

  return `watchlyIO-${formattedID}`;
}
