import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { WaitingList } from "./components/waiting-list/WaitingList";
import { Container } from "@/components/Container";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <main>
      <Container>
        <div className="pt-5">
          <Navbar />
        </div>
        <div className="mt-10">
          <Hero />
        </div>
        <WaitingList />
      </Container>
    </main>
  );
}
