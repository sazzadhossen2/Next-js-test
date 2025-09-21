'use client';

import Menu from "@/component/Menu";
import { useRouter } from "next/navigation";

export default function Todos() {
  const router = useRouter();

  const Goto = () => {
    router.push("/about?name=hello&price=20");
  };

  return (
    <div>
      {/* <Menu /> */}
      <h1>Home Page List</h1>
      <button onClick={Goto}>About Page</button>
    </div>
  );
}
