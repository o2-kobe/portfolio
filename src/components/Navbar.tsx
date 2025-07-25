const Navbar = () => {
  const navLinks = [
    { id: 1, title: "Skills" },
    { id: 2, title: "Projects" },
    { id: 3, title: "Contact" },
  ];

  return (
    <nav className="py-2 px-5 rounded-4xl border bg-white/20 backdrop-blur-lg  border-gray-300 shadow-md w-[50%] mx-auto mt-7 top-0 left-[25%] z-50 fixed">
      <div className="flex justify-between text-center items-center font-medium ">
        <div className="flex items-center gap-1 cursor-pointer">
          <img
            src="person.webp"
            alt="myself"
            className="w-7 h-7 rounded-full"
          />
          <h3>Laud Tetteh</h3>
        </div>

        <div>
          <ul className="flex gap-3 items-center cursor-pointer">
            {navLinks.map((link) => (
              <li
                className={
                  link.title === "Contact"
                    ? "px-4 py-1 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-all duration-[0.5s]"
                    : "hover:text-gray-600 transition-all duration-[0.3s]"
                }
                key={link.id}
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
