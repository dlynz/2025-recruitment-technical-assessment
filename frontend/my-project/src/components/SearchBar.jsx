import { useState } from "react";
import { FilterAlt, FilterList, Search } from "@mui/icons-material";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-0 pl-4 pr-4 pt-3 w-full sm:h-12 gap-y-2">
      <div className="relative w-full sm:w-1/2">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          className="h-[43px] w-full border-2 border-gray-300 dark:border-gray-600 dark:text-white dark:bg-gray-900 duration-300 rounded-md pl-10 pr-4 focus:outline-none dark:focus:border-freerooms-orange focus:border-freerooms-orange focus:ring-freerooms-orange"
          placeholder="Search for a building..."
          value={query}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex w-full sm:w-auto justify-between sm:justify-normal gap-2">
        <button className="flex flex-1 sm:flex-none h-[43px] pl-6 pr-6 rounded-lg justify-around items-center text-freerooms-orange border-2 border-freerooms-orange">
          <FilterAlt />
          <p className="font-bold ml-1">Filters</p>
        </button>
        <button className="flex flex-1 sm:flex-none h-[43px] pl-6 pr-6 rounded-lg justify-evenly items-center text-freerooms-orange border-2 border-freerooms-orange">
          <FilterList />
          <p className="font-bold ml-1">Sort</p>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
