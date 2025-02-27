import { DarkMode, Map } from "@mui/icons-material";
import WindowIcon from '@mui/icons-material/Window';
import logo from "../assets/freeRoomsLogo.png";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <>
      <div className="flex justify-between pl-2 items-center w-full h-[68px] border bg-white border-b-gray-300">
        <div className="flex justify-center items-center cursor-pointer">
          <img src={logo} className="w-12" alt="Logo"/>
          <div className="flex justify-center items-center text-freerooms-orange font-bold text-3xl">Freerooms</div>
        </div>
        <div className="flex w-52 justify-evenly items-center">
          <button className="flex w-10 h-10 p-2 border-orange-300 hover:bg-[#FFF9F5] hover:border-freerooms-orange duration-300 border rounded-[4px]">
            <SearchIcon className="text-freerooms-orange" />
          </button>
          <button className="flex w-10 h-10 p-2 bg-freerooms-orange hover:bg-orange-800 border-freerooms-orange duration-300 border rounded-[4px]">
            <WindowIcon className="text-white" />
          </button>
          <button className="flex w-10 h-10 p-2 border-orange-300 hover:bg-[#FFF9F5] hover:border-freerooms-orange duration-200 border rounded-[4px]">
            <Map className="text-freerooms-orange" />
          </button>
          <button className="flex w-10 h-10 p-2 border-orange-300 hover:bg-[#FFF9F5] hover:border-freerooms-orange duration-200 border rounded-[4px]">
            <DarkMode className="text-freerooms-orange" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Header;
