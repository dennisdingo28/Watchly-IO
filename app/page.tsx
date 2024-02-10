import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { WaitingList } from "./components/waiting-list/WaitingList";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <main>
      <Container>
        <Navbar />
        <WaitingList/>
      </Container>
    </main>
  );
}
