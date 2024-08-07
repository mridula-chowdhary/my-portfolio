import { FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const CodingProfile = () => {
  return (
    <section
      id="coding-profile"
      className="relative z-10 text-white rounded-lg shadow-lg max-w-4xl mx-auto mt-12 mb-12"
    >
      <h2 className="text-4xl md:text-5xl mb-8 text-center font-semibold">Profile</h2>
      <p className="text-center text-lg md:text-xl mb-8">
        Check out my profiles on these coding platforms:
      </p>
      <ul className="flex justify-center items-center gap-6">
        <li>
          <a
            href="https://github.com/mridula-chowdhary"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3"
          >
            <FaGithub className='text-5xl text-gray-400' />
            {/* <span className="text-blue-400 hover:underline text-xl">GitHub</span> */}
          </a>
        </li>
        <li>
          <a
            href="https://leetcode.com/u/Mridula_18/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3"
          >
            <SiLeetcode className='text-5xl text-yellow-400' />
            {/* <span className="text-blue-400 hover:underline text-xl">LeetCode</span> */}
          </a>
        </li>
        <li>
          <a
            href="https://www.geeksforgeeks.org/user/mridulachowdhary21/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3"
          >
            <SiGeeksforgeeks className='text-5xl text-green-400' />
            {/* <span className="text-blue-400 hover:underline text-xl">GeeksforGeeks</span> */}
          </a>
        </li>
      </ul>
    </section>
  );
};

export default CodingProfile;
