import { revalidateTag } from "next/cache";

export const Button = () => {
  async function action() {
    "use server";

    revalidateTag("now-test");
  }

  return (
    <form action={action}>
      <button>Update</button>
    </form>
  );
};
