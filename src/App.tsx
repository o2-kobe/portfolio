import AppLayout from "./components/AppLayout";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <AppLayout>
        <Navbar />
        <Hero />
        <Skills />
      </AppLayout>
    </div>
  );
};
export default App;
