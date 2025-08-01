const CtaButton = () => {
  return (
    <button className="px-5 py-1.5 rounded-full bg-black text-white flex items-center gap-3 w-fit mt-5 cursor-pointer ">
      <img src="person.webp" alt="myself" className="w-7 h-7 rounded-full" />
      <a href="#Contact" className="font-semibold ">
        Get in touch
      </a>
    </button>
  );
};
export default CtaButton;
