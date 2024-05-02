'use client'
import Image from "next/image";
import ProductCard from "./components/ProductComponent";

export default function Home() {
  return (
    <main className="flex flex-col py-12 lg:py-24  max-w-7xl mx-auto px-8">
        <ProductCard />
    </main>
  );
}
