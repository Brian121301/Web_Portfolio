import About from "./about/page";
import Homepage from "./home/page";
import { Container } from "postcss";
import Projects from "./projects/page";

export default function main() {
  return (
    <main
      className="min-h-screen bg-cover bg-center"
    >
      <div>
        <div id="home">
          <Homepage />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>

    </main>
  );
}
