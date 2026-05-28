import { NavBar } from "@/app/components/navbar";
import{ Hero} from "@/app/components/hero";
import { Button } from "@/app/components/button";
import { Shadows } from "@/app/components/shadows";
import { Footer } from "@/app/components/footer";
import { SupportButton } from "@/app/components/SupportButton";


export default function Home() {
  return (
    <main className="min-h-screen selection:bg-sky-300">
    
     
      <NavBar />
      <Hero />
      <Button />
      <Shadows />
      <Footer />
      {/* <SupportButton /> */}
    </main>
  );
}