import { motion } from "framer-motion";
import { skills } from "./../data/Skills";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <section id="Skills" className="scroll-mt-[150px]">
        <h2 className="text-2xl font-bold mb-4">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
          {skills.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <item.icon color={item.color} className="text-4xl mb-2" />
              <span className="text-sm font-medium">{item.skill}</span>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
export default Skills;
