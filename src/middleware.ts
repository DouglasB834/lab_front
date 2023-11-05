import { NextRequest, NextResponse } from "next/server";
import Cookie from "js-cookie";

export default function middleware(req: NextRequest) {
  const userName = req.cookies.get("user")?.value;
  console.log(userName);
  if (!userName) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (req.nextUrl.pathname === "/login" && userName) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  middleware: "blocking",
  matcher: ["/", "/cadastrar", "/login"],
};
