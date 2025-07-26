import AppLayout from "./components/AppLayout";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <AppLayout>
        <Hero />
        <hr className="text-gray-200 my-25 " />
        <Skills />
        <hr className="text-gray-200 my-25 " />
        <Projects />
      </AppLayout>
      <Footer />
    </div>
  );
};
export default App;
