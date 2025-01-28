import { RefsProvider } from "./contexts/RefContexts";

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <RefsProvider>
        <Navbar />
        <MainContent />
        <Footer />
      </RefsProvider>
    </div>
  );
}

export default App;
