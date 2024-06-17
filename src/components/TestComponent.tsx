import { fetchTest } from "@/actions";

export default async function TestComponent({ from }: { from: string }) {
  const json = await fetchTest();
  const json2 = await fetchTest();
  return (
    <div>
      {from}: {JSON.stringify(json)}
      {from}2: {JSON.stringify(json2)}
    </div>
  );
}
