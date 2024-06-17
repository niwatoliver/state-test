import type { Hono, InferRequestType, Schema } from "hono";
import type { ClientRequest, ClientRequestOptions } from "hono/client";
import { hc } from "hono/client";
import { sign } from "hono/jwt";
import { HonoType } from "@/app/api/[[...route]]/route";

const BACKEND_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : // : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
      `https://state-test-zeta.vercel.app`;

// https://github.com/honojs/hono/blob/f616ed9abe3e3cc28d3c96894020897796bfbde2/src/client/client.ts#L8-L24
const createProxy = <T extends Hono>(
  getOption: () => Promise<ClientRequestOptions>,
  path: string[],
): ReturnType<typeof hc<T>> =>
  // eslint-disable-next-line
  new Proxy<any>(() => {}, {
    get(_obj, key) {
      if (typeof key !== "string" || key === "then") {
        return undefined;
      }
      return createProxy(getOption, [...path, key]);
    },
    async apply(_1, _2, args) {
      const client = hc<T>(BACKEND_BASE_URL, await getOption());
      // eslint-disable-next-line
      return path.reduce((acc, key) => acc[key], client as any)(...args);
    },
  });

export const backendClient = () =>
  createProxy<HonoType>(async () => {
    // TODO expire的なやつ
    // const token = "";
    return {
      // headers: {
      //   ...(token && {
      //     Authorization: `Bearer ${token}`,
      //   }),
      // },
    };
  }, []);
