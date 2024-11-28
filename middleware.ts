import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCookie } from "./app/_services/CookieService";
import userService from "./app/_services/UserService";

export async function middleware(request: NextRequest) {
  try {
    const token = await getCookie("jwt");
    if (!token && request.nextUrl.pathname !== "/login") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    if (token) {
      const response = await userService.getData(token);
      if (response.status === 200 && request.nextUrl.pathname === "/login") {
        return NextResponse.redirect(new URL("/", request.url));
      } else if (
        response.status !== 200 &&
        request.nextUrl.pathname !== "/login"
      ) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }
    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/profile/:path*", "/login"],
};
