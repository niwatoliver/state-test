"use server";

import { backendClient } from "@/app/backendClient";

export async function fetchTest() {
  const client = backendClient();
  const hello = await client.api.hello.$get();
  // const response = await fetch(`${BACKEND_BASE_URL}/api`, {
  //   next: { tags: ["counter-test"] },
  //   cache: "no-store",
  // });
  return await hello.json();
}
