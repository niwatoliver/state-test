"use server";

import { backendClient } from "@/app/backendClient";
import { notFound } from "next/navigation";

export async function fetchTest() {
  const client = backendClient();
  const res = await client.api.hello.$get();

  if (!res.ok) {
    return notFound();
  }

  const json = await res.json();
  if (json === null) {
    return notFound();
  }

  return json;
}
