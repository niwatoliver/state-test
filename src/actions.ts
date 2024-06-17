"use server";

const BACKEND_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

export async function fetchTest() {
  const response = await fetch(`${BACKEND_BASE_URL}/api`, {
    next: { tags: ["counter-test"], revalidate: 0 },
  });
  const json = await response.json();
  return json.now;
}
