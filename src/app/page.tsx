import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Work } from "@/sections/Work";
import { GSAPInit } from "@/components/GSAPInit";
import { DotBg } from "@/components/DotBg";

export default function Home() {
  return (
    <>
      <GSAPInit />
      <DotBg />
      <Header />
      <main>
        <Hero />
        <Work />
        <Footer />
      </main>
    </>
  );
}
