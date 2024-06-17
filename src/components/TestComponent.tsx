import { fetchTest } from "@/actions";

export default async function TestComponent({ from }: { from: string }) {
  const now = await fetchTest();
  return (
    <div>
      {from}: {now}
    </div>
  );
}
