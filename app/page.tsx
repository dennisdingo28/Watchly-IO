import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { WaitingList } from "./components/waiting-list/WaitingList";
import { Container } from "@/components/Container";
import { Hero } from "./components/hero/Hero";
import { Card } from "./components/hero/Card";
import { Hammer, Lightbulb, ShieldCheck } from "lucide-react";
import { About } from "./components/about/About";

export default function Home() {
  return (
    <main>
      <div className="pt-5">
        <Container>
          <Navbar />
        </Container>
      </div>
      <div className="mt-10">
        <Hero />
        <div className="bg-gradient-to-b from-[#d9d7fe] to-white pt-5">
          <Container>
            <div className="flex flex-col sm:flex-row sm:justify-center gap-5 h-full">
              <Card
                title="Credibility"
                icon={<ShieldCheck />}
                description="We deliver on our promises every time with our guarantee."
                color="bg-[#6ad9c6]"
              />
              <Card
                title="Creativity"
                icon={<Hammer />}
                description="We bring innovation to every project for your bussiness."
                color="bg-[#ffd67a]"
              />
              <Card
                title="Curiosity"
                icon={<Lightbulb />}
                description="We stay ahead in the over-evolving digital landscapes."
                color="bg-[#776df2]"
              />
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <About />
        <WaitingList />
      </Container>
    </main>
  );
}
