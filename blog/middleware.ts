import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/"]);

export default clerkMiddleware(async(auth, req) => {
  const { userId } = await auth();

  // Nếu người dùng đã đăng nhập và truy cập trang chủ, chuyển hướng đến /blog
  if (userId && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/blog", req.url));
  }

  if (!userId && !isPublicRoute(req)) {
    return NextResponse.redirect("http://localhost:3000");
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Bỏ qua các tệp nội bộ của Next.js và tất cả các tệp tĩnh, trừ khi được tìm thấy trong tham số tìm kiếm
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Luôn chạy cho các route API
    '/(api|trpc)(.*)',
  ],
};
