import AppLayout from "./components/AppLayout";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <AppLayout>
        <Navbar />
        <Hero />
      </AppLayout>
    </div>
  );
};
export default App;
