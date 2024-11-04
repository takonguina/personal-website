import Description from "./description";
import Experiences from "./experiences/experiences";
import Projects from "./projects/projects";

export default function Feed() {
  return (
    <div className="lg:my-24 flex-1">
      <Description />
      <Experiences />
      <Projects />
    </div>
  );
}
