interface ProjectCardProps {
  image: string | undefined;
  title: string;
  summary: string;
  link: string;
}

const ProjectCard = ({ image, title, summary, link }: ProjectCardProps) => {
  return (
    <div
      className="
        relative flex rounded-[20px] transition-all duration-300 ease-in-out
        shadow-[1px_2px_40px_8px_rgba(0,0,0,0.2)]
        hover:shadow-[1px_2px_40px_8px_rgba(0,0,0,0.5)] hover:scale-105
        h-90
        group
      "
    >
      <img
        className="rounded-[12px] w-full h-auto object-cover" // Added h-auto object-cover for better image handling
        alt={title}
        src={image}
      />

      <div
        className="
          absolute inset-0 flex flex-col items-start gap-[10px]
          backdrop-blur-[2px] bg-black/70
          transition-opacity duration-300 ease-in-out rounded-[6px] p-3
          justify-end opacity-0 group-hover:opacity-100
        "
      >
        <h5 className="text-white text-4xl font-bold">{title}</h5>
        <p className="font-semibold text-sm text-white">{summary}</p>
        <button className="text-2xl cursor-pointer font-semibold px-3 py-1 ml-auto bg-white rounded-full">
          <a href={link}>
            View Project <span>&#8599;</span>
          </a>
        </button>
      </div>
    </div>
  );
};
export default ProjectCard;
