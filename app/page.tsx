import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { WaitingList } from "./components/waiting-list/WaitingList";
import { Container } from "@/components/Container";
import { Hero } from "./components/hero/Hero";

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-t from-[#d9d7fe]">
        <Container>
          <div className="pt-5">
            <Navbar />
          </div>
          <div className="mt-10">
            <Hero />
          </div>
        </Container>
      </div>

      <Container>
        <WaitingList />
      </Container>
    </main>
  );
}
