import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { id: 1, title: "Skills" },
    { id: 2, title: "Projects" },
    { id: 3, title: "Contact" },
  ];

  return (
    <nav className="py-2 px-5 rounded-4xl border bg-white/20 backdrop-blur-lg  border-gray-300 shadow-md w-[60%] md:w-[50%] mx-auto mt-7 top-0 left-[20%] md:left-[25%] z-50 fixed">
      <div className="flex justify-between text-center items-center font-medium ">
        <div className="flex items-center gap-1 cursor-pointer">
          <img
            src="person.webp"
            alt="myself"
            className="w-7 h-7 rounded-full"
          />
          <h3>
            <a href="#Hero">Laud Tetteh</a>
          </h3>
        </div>

        {/* Desktop view */}
        <div>
          <ul className="hidden md:flex gap-3 items-center cursor-pointer">
            {navLinks.map((link) => (
              <li
                className={
                  link.title === "Contact"
                    ? "px-4 py-1 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-all duration-[0.5s]"
                    : "hover:text-gray-600 transition-all duration-[0.3s]"
                }
                key={link.id}
              >
                <a href={`#${link.title}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          {/* Mobile View*/}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-more-horizontal"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </button>
          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="absolute right-5 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50 md:hidden">
              <ul className="flex flex-col py-2">
                {navLinks.map((link) => (
                  <li
                    className={
                      link.title === "Contact"
                        ? "px-4 py-2 border-b border-gray-100 hover:bg-black hover:text-white transition-all duration-300 rounded-b-lg"
                        : "px-4 py-2 border-b border-gray-100 hover:bg-gray-100 transition-all duration-200"
                    }
                    key={link.id}
                    onClick={() => setMenuOpen(false)}
                  >
                    <a href={`#${link.title}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
