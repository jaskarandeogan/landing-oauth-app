'use client'
import Image from "next/image";
import ProductCard from "./components/ProductComponent";

export default function Home() {
  return (
    <main className="orange-gradient-100 md:min-h-[calc(100vh-80px)] flex items-center">
      <div className="flex flex-col py-6 md:py-12 max-w-7xl mx-auto px-2 md:px-8 glass-bg lg:rounded-[16px] items-center justify-center">
        <ProductCard />
      </div>
    </main>
  );
}
