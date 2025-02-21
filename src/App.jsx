import { motion } from "framer-motion";

import { RefsProvider } from "./contexts/RefContexts";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  const pageVariants = {
    hidden: {
      opacity: 0,
      y: 20, // Start 50px below
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -50, // Exit 50px above
    },
  };
  return (
    <RefsProvider>
      <Navbar />
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={pageVariants}
        style={{ width: "100%" }}
      >
        <MainContent />
        <Footer />
      </motion.div>
    </RefsProvider>
  );
}

export default App;
