"use server";

import { hc } from "hono/client";
import { HonoType } from "@/app/api/[[...route]]/route";

const BACKEND_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

export async function fetchTest() {
  const client = hc<HonoType>(BACKEND_BASE_URL);
  const hello = await client.api.hello.$get();
  // const response = await fetch(`${BACKEND_BASE_URL}/api`, {
  //   next: { tags: ["counter-test"] },
  //   cache: "no-store",
  // });
  return await hello.json();
}
