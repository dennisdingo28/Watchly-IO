import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { WaitingList } from "./components/waiting-list/WaitingList";
import { Container } from "@/components/Container";
import Hero from "./components/hero/Hero";
import { Card } from "./components/hero/Card";
import { Hammer, Lightbulb, ShieldCheck } from "lucide-react";

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
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2.5 mt-5">
            <Card
              title="Credibility"
              icon={<ShieldCheck />}
              description="We deliver on our promises every time with our guarantee."
              color="6ad9c6"
            />
            <Card
              title="Creativity"
              icon={<Hammer />}
              description="We bring innovation to every project for your bussiness."
              color="ffd67a"
            />
            <Card
              title="Curiosity"
              icon={<Lightbulb />}
              description="We stay ahead in the over-evolving digital landscapes."
              color="776df2"
            />
          </div>
        </Container>
      </div>
      <Container>
        <WaitingList />
      </Container>
    </main>
  );
}
