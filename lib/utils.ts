import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateApiKey(){
  const uniqueID = crypto.randomUUID();
  const formattedID = uniqueID.replace(/-/g, '');

  return `watchlyIO-${formattedID}`;
}