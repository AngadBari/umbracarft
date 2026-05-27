import { NavBar } from "@/app/components/navbar";
import{ Hero} from "@/app/components/hero";
import { Button } from "@/app/components/button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <Button />
    </main>
  );
}