import Navbar from "@/components/Navbar";
import { Container } from "postcss";

export default function Home() {
  return (
    <main className="min-h-screen bg-cover">
      <div 
        className="w-full h-full" 
        style={{
          backgroundImage: "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilXCPNF4E0v7ishOQp4_hsiWuEqMX01ZFiEdjIiW7ouHvPvbbbgAO9p_ubpmqeauUXE40oS0E5yiH3ziZWFAz5PgROU5b2yDLdFrfXsp9FiqGz7MF9U8Q0PhoYlYF2Im4US0DlJIe8dHOo/d/background-wallpaper-4k-gamer-2020-06-01-162709-2-3840x2160.jpg')",
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
