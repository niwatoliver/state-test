import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "nodejs";

const app = new Hono().basePath("/api").get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js!",
    now: Date.now(),
  });
});

export const GET = handle(app);
export const POST = handle(app);

export type HonoType = typeof app;
