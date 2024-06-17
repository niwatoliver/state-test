import { Button } from "@/components/Button";
import TestComponent from "@/components/TestComponent";
import { fetchTest } from "@/actions";

export default async function Home() {
  const json = await fetchTest();
  const json2 = await fetchTest();
  return (
    <main>
      1: {JSON.stringify(json)}
      2: {JSON.stringify(json2)}
      <TestComponent from="Home" />
      <Button />
    </main>
  );
}
