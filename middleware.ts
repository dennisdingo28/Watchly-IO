import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { allRoutes, apiPrefix, publicRoutes } from "./constants";

const { auth } = NextAuth(authConfig);

//@ts-ignore
export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) return null;

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL(`/?modal=login`, nextUrl));
  }

  if (!nextUrl.pathname.startsWith(apiPrefix)) {
    const routeExists = allRoutes.includes(nextUrl.pathname) || nextUrl.pathname.startsWith("/dashboard");

    if (!routeExists) return Response.redirect(new URL("/", nextUrl));
  }
  return null;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
