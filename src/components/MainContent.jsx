import { useNavRefs } from "../contexts/useNavRefs";
import Header from "./Header";
import Skills from "./Skills";
import Projects from "./Projects";
import Connect from "./Connect";

function MainContent() {
  const { homeRef, skillsRef, projectsRef, connectRef } = useNavRefs();

  return (
    <div>
      <div ref={homeRef}>
        <Header ref={homeRef} />
      </div>

      <div ref={skillsRef}>
        <Skills ref={skillsRef} />
      </div>

      <div ref={projectsRef}>
        <Projects ref={projectsRef} />
      </div>

      <div ref={connectRef}>
        <Connect ref={connectRef} />
      </div>
    </div>
  );
}

export default MainContent;
