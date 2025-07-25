import { motion } from "framer-motion";
import HeroImages from "./HeroImages";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="grid grid-cols-2 mt-45">
        <HeroText />
        <HeroImages />
      </div>
    </motion.div>
  );
};
export default Hero;
