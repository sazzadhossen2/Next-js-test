"use client";


import Menu from "@/component/Menu";
import { useSearchParams } from "next/navigation";
export default function Product() {
  const searchParams = useSearchParams();
  return (
    <div>
      <Menu />
      <h1>Product Page</h1>
      <p>This is the product page of our application.</p>
      <p>Product Name: {searchParams.get("name")}</p>
      <p>Product Price: {searchParams.get("price")}</p>
    </div>
  );
}
