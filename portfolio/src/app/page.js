import About from "./about/page";
import Homepage from "./home/page";
import Projects from "./projects/page";
import ResumePage from "./resume/page";

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
        <div id="resume">
          <ResumePage />
        </div>
      </div>

    </main>
  );
}
