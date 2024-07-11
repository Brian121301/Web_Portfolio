import Navbar from "@/components/Navbar";
import { Container } from "postcss";

export default function Home() {
  return (
    <main className="min-h-screen bg-cover">
      <div 
        className="w-full h-full" 
        style={{
          backgroundImage: "url('')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='w-full'>
          <Navbar />
        </div>
        
      </div>

    </main>
  );
}
