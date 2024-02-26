import authConfig from "./auth.config";
import NextAuth from "next-auth";
import {
  allRoutes,
  apiAuthPrefix,
  publicRoutes,
} from "./constants";

const { auth } = NextAuth(authConfig);

//@ts-ignore
export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  

  
  if (isApiAuthRoute || nextUrl.pathname.startsWith("/api")) return null;

  if (!isLoggedIn && !isPublicRoute) {
    
    return Response.redirect(
      new URL(`/?modal=login`, nextUrl)
    );
  }

  // if(!nextUrl.pathname.startsWith(apiAuthPrefix)){
  //   const routeExists = allRoutes.includes(nextUrl.pathname);
    
  //   if(!routeExists) return Response.redirect(
  //     new URL("/", nextUrl)
  //   );
  // }
  return null;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};