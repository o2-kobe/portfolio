import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CtaButton from "./ctaButton";

const words = ["Code", "Push", "Tech"];

const HeroText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="text-6xl md:text-7xl font-semibold mb-6 md:mb-4 flex flex-col">
        <div className="flex items-baseline">
          <div className="w-39 md:w-47 h-20 flex items-center justify-start">
            {" "}
            {/* Wider container */}
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 18,
                  mass: 1.5,
                  opacity: { duration: 0.8 },
                }}
                className="text-[#818181]"
                style={{ display: "inline-block" }}
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>
          <h1 className="text-[#818181]">that</h1>
        </div>
        <h1>delivers results.</h1>
      </div>

      <p>
        <span className="font-semibold">
          Engineering that drives growth and performance.
        </span>{" "}
        <span className="text-[#5e5e5e]">
          I build reliable, user-friendly web applications that help businesses
          run better, reach more people, and scale confidently.
        </span>
      </p>
      <CtaButton />
    </div>
  );
};
export default HeroText;
