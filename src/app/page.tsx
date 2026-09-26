import { Beyond } from "@/components/beyond";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Education } from "@/components/education";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Work />
        <Education />
        <Beyond />
      </main>
      <Contact />
    </div>
  );
}
