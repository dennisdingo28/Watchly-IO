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

export function copyText(text: string){
  return new Promise((resolve, reject)=>{
    navigator.clipboard.writeText(text).then(resolve).catch(reject);
  });
}