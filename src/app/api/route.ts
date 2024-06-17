import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({ now: Date.now() });
}

export const dynamic = "force-dynamic";
