"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const currentPath = usePathname();
  
  return (
    <nav>
      <ul>
       <Link className={currentPath === "/" ? "active-link" : "pending-link"} href="/">Home</Link><br/>
       <Link className={currentPath === "/about" ? "active-link" : "pending-link"} href="/about">About</Link><br/>
       <Link className={currentPath === "/product" ? "active-link" : "pending-link"} 
       href={{pathname:"/product",query:{name:"test",price:100}}}
       >Product</Link><br/>

      </ul>
    </nav>
  );
}
