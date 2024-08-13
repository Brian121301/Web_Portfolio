import About from "./about/page";
import Homepage from "./home/page";
import Projects from "./projects/page";
import ResumePage from "./resume/page";

export default function Main() {
  return (
    <main className="min-h-screen bg-cover bg-center">
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
        <div id="resume" style={{ padding: '40px 0' }}> {/* Add padding to the resume section */}
          <ResumePage />
        </div>
      </div>
    </main>
  );
}
