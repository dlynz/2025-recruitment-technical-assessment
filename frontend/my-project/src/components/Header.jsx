import { DarkMode, Map } from "@mui/icons-material";
import WindowIcon from '@mui/icons-material/Window';
import logo from "/assets/freeRoomsLogo.png";
import logoClosed from "/assets/freeroomsDoorClosed.png"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

function Header({ darkMode, setDarkMode }) {
  const [isLogoOpen, setIsLogoOpen] = useState(true);

  const toggleLogo = () => {
    setIsLogoOpen(!isLogoOpen);
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className="flex justify-between pl-2 items-center w-full h-[68px] border dark:border-gray-700 bg-white dark:bg-gray-800 border-b-gray-300 dark:border-b-gray-700 duration-300">
        <div onClick={toggleLogo} className="flex justify-center items-center cursor-pointer hover:opacity-70 duration-300">
          <img src={isLogoOpen ? logo : logoClosed} className="w-12" alt="Logo"/>
          <div className="flex justify-center select-none items-center text-freerooms-orange font-bold text-3xl">
            Freerooms
          </div>
        </div>
        <div className="flex w-52 justify-evenly items-center">
          <button className="flex w-10 h-10 p-2 border-orange-300 hover:bg-[#FFF9F5] hover:border-freerooms-orange duration-300 border rounded-[4px] dark:border-orange-500 dark:hover:bg-gray-900 dark:hover:border-orange-600">
            <SearchIcon className="text-freerooms-orange" />
          </button>
          <button className="flex w-10 h-10 p-2 bg-freerooms-orange hover:bg-orange-800 border-freerooms-orange duration-300 border rounded-[4px]">
            <WindowIcon className="text-white" />
          </button>
          <button className="flex w-10 h-10 p-2 border-orange-300 hover:bg-[#FFF9F5] hover:border-freerooms-orange duration-200 border rounded-[4px] dark:border-freerooms-orange dark:hover:bg-gray-900 dark:hover:border-orange-600">
            <Map className="text-freerooms-orange" />
          </button>
          <button 
            onClick={toggleDarkMode} 
            className="flex w-10 h-10 p-2 border-orange-300 hover:bg-[#FFF9F5] hover:border-freerooms-orange duration-200 border rounded-[4px] dark:border-freerooms-orange dark:hover:bg-orange-800 dark:hover:border-freerooms-orange dark:bg-freerooms-orange"
          >
            <DarkMode className="text-freerooms-orange dark:text-white" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
