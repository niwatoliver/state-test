import { fetchTest } from "@/actions";

export default async function TestComponent({ from }: { from: string }) {
  const json = await fetchTest();
  return (
    <div>
      {from}: {JSON.stringify(json)}
    </div>
  );
}
