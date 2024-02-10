import { Container } from "@/components/Container";
import "./globals.css"

export default function Home() {
  return (
    <main>
      <Container>
        <div className="flex justify-between">
          <h1 className="font-bold">Watchly IO</h1>
          <nav className="flex gap-2">
            <p className="text-sm cursor-pointer tracking-tighter font-medium">docs</p>
            <p className="text-sm cursor-pointer">pricing</p>
            <p className="text-sm cursor-pointer">account</p>
          </nav>
          <h1 className="text-[2em] font-bold">Lorem ipsum dolor sit amet.</h1>
        </div>
      
        <div className="h-[700px]"></div>
        <p>dasuhudas</p>
      </Container>
    </main>
  );
}
