import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="flex justify-between items-center py-3 font-bold left-0 right-0 top-0 fixed z-20 px-8 white dark:bg-gray-800 text-black dark:text-white">
      <ul className="flex gap-8 items-center text-sm">
        <li>
          <Link
            className="hover:text-gray-900 hover:bg-gray-300 p-2 rounded-md transition-all duration-300"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-gray-900 hover:bg-gray-300 p-2 rounded-md transition-all duration-300"
            to="/blogs"
          >
            Blogs
          </Link>
        </li>
      </ul>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
      >
        {darkMode ? (
          <SunIcon className="h-6 w-6 text-white" />
        ) : (
          <MoonIcon className="h-6 w-6 text-gray-800" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
