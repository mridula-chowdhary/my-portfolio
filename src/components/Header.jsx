import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  return (
    <div className="text-white p-4 bg-black flex justify-between sticky top-0 z-50">
      <div>
        <h1 className="text-3xl">My Portfolio</h1>
      </div>
      <div>
        <ul className="flex space-x-6 text-xl cursor-pointer">
          <li>
            <ScrollLink to="hero" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="resume" smooth={true} duration={500}>
              Resume
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
