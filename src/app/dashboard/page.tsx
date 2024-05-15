import About from "../about/page";
import Achievement from "../achievement/page";
import Project from "../projects/page";
import "./styles.css";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="sections">
        <section id="about">
          <About />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="skill">
          <About />
        </section>
        <section id="achievement">
          <Achievement />
        </section>
      </div>
    </div>
  );
}
