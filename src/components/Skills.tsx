import { skills } from "./../data/Skills";

const Skills = () => {
  return (
    <section className="my-25">
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
  );
};
export default Skills;
