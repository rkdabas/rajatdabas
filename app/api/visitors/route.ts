import { randomUUID } from "node:crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { addUniqueVisitor, VISITOR_COOKIE } from "@/lib/visitor-analytics";

export const dynamic = "force-dynamic";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 * 5;

export async function POST() {
  const cookieStore = await cookies();
  let visitorId = cookieStore.get(VISITOR_COOKIE)?.value;
  const isNewVisitor = !visitorId;
  if (!visitorId) {
    visitorId = randomUUID();
  }

  const result = await addUniqueVisitor(visitorId);

  if (result.count === null) {
    return NextResponse.json({ ok: false, count: null } as const);
  }

  const res = NextResponse.json({ ok: true, count: result.count } as const);

  if (isNewVisitor) {
    res.cookies.set(VISITOR_COOKIE, visitorId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: COOKIE_MAX_AGE,
      path: "/",
    });
  }

  return res;
}
