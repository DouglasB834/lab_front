// import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { i18n } from "@/config/i18n.config";

export default createMiddleware(i18n);

// export default function middleware(req: NextRequest) {
//   const userName = req.cookies.get("user")?.value;
//   console.log(userName);

//   if (!userName) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }
// }

export const config = {
  // matcher: ["/((?!api|_next|.*\\..*).*)"],
  matcher: ["/", "/cadastrar", "/((?!api|_next|.*\\..*).*)"],
};
