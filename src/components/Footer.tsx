import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black p-15 border scroll-mt-[150px]" id="Contact">
      <div className="text-6xl font-semibold mb-9">
        <h3 className="text-white">Let&apos;s build</h3>
        <h3 className="text-[#9b9b9b]">incredible work together.</h3>
      </div>

      <div className="flex items-center justify-between text-white">
        <div>
          <h6 className="text-[#9b9b9b] text-sm">Email</h6>
          <a href="mailto:kobbykurtx@gmail.com" className="text-white">
            kobbykurtx@gmail.com
          </a>
        </div>

        <div className="flex flex-col items-center">
          <h6 className="text-[#9b9b9b] text-sm">Call me</h6>
          <a href="mailto/gg.mail.com" className="text-white">
            <FaPhoneAlt />
          </a>
        </div>

        <div className="flex flex-col items-center">
          <h6 className="text-[#9b9b9b] text-sm">Socials</h6>
          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/_o2.kobe"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram size={25} />
            </a>

            <a href="https://github.com/o2-kobe" target="_blank">
              <AiOutlineGithub size={25} />
            </a>

            <a href="https://www.linkedin.com" target="_blank">
              <AiOutlineLinkedin size={25} />
            </a>
          </div>
        </div>
      </div>

      <hr className="text-white my-6" />

      <div className="text-[#9b9b9b] flex justify-between items-center text-sm">
        <p>Based in Accra, Ghana </p>
        <p>&copy;2025 Laud Tetteh</p>
      </div>
    </footer>
  );
};
export default Footer;
