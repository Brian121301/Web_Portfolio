import Navbar from "@/components/Navbar";
import Homepage from "./home/page";
import { Container } from "postcss";

export default function main() {
  return (
    <main className="min-h-screen bg-cover">
      <div>
        <div className='w-full'>
          <Navbar />
        </div>
        <div>
          <Homepage />
        </div>

      </div>

    </main>
  );
}
