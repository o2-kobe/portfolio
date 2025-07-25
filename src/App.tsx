import AppLayout from "./components/AppLayout";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <AppLayout>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
      </AppLayout>
    </div>
  );
};
export default App;
