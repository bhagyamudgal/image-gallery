import { useContext } from "react";
import { MenuContext } from "../store/MenuContext";
import Search from "./Search";

function Header({ onClick }) {
  const { menuStatus, toggleMenu } = useContext(MenuContext);

  function menuHandler() {
    toggleMenu();
  }

  return (
    <header className="bg-white shadow-md py-6 px-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Left */}
        <a href="/">
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-9 cursor-pointer transform hover:scale-110 transition-all duration-150 ease-out"
          />
        </a>

        {/* Right - Mobile */}
        <div className="flex md:hidden space-x-2">
          {/* Menu */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 cursor-pointer transform hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={menuHandler}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        {/* Middle */}
        <Search
          mainClass="relative w-60 lg:w-96 bg-gray-100 p-1 rounded-md border-2 focus-within:border-black hidden md:block"
          searchIconClass="h-6 w-6 absolute top-2 left-2 text-gray-400"
          inputClass="bg-transparent pl-11 pr-8  h-8 text-lg outline-none w-full"
          onClick={onClick}
        />

        {/* Right - Dektop */}
        <div className="hidden md:flex space-x-6">
          <span className="text-md font-medium cursor-pointer transform hover:scale-110">
            Explore
          </span>
          <span className="text-md font-medium cursor-pointer transform hover:scale-110">
            Collection
          </span>
          <span className="text-md font-medium cursor-pointer transform hover:scale-110">
            Community
          </span>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuStatus && (
        <div className="flex flex-col mt-6 items-center space-y-2 md:hidden">
          <Search
            mainClass="relative w-full bg-gray-100 p-1 rounded-md border-2 focus-within:border-black mb-2"
            searchIconClass="h-6 w-6 absolute top-2 left-2 text-gray-400"
            inputClass="bg-transparent pl-11 pr-8 h-8 text-lg outline-none w-full"
            onClick={onClick}
          />

          <span className="text-md font-medium cursor-pointer transform hover:scale-110">
            Explore
          </span>
          <span className="text-md font-medium cursor-pointer transform hover:scale-110">
            Collection
          </span>
          <span className="text-md font-medium cursor-pointer transform hover:scale-110">
            Community
          </span>
        </div>
      )}
    </header>
  );
}

export default Header;
