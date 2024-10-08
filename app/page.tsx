import Image from "next/image";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import ContactPage from "@/components/main/ContactPage";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        {/* <Experience /> */}
        <Projects />
        <ContactPage />
      </div>
    </main>
  );
}
