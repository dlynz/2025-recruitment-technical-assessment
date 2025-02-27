import { useState } from "react";
import { FilterAlt, FilterList, Search } from "@mui/icons-material";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="flex justify-between items-center mt-0 pl-2 pr-2 pt-3 w-full h-12">
      <button className="flex h-[43px] w-[140px] pl-6 pr-6 rounded-lg justify-around items-center text-freerooms-orange border-2 border-freerooms-orange">
        <FilterAlt />
        <p className="font-bold ml-1">Filters</p>
      </button>
      <div className="relative ml-2 mr-2 min-w-[300px] w-1/2">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          className="h-[43px] w-full border-2 border-gray-300 rounded-md pl-10 pr-4 focus:outline-none focus:border-freerooms-orange focus:ring-freerooms-orange"
          placeholder="Search for a building..."
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <button className="flex h-[43px] w-[140px] pl-6 pr-6 rounded-lg justify-evenly items-center text-freerooms-orange border-2 border-freerooms-orange">
        <FilterList />
        <p className="font-bold ml-1">Sort</p>
      </button>
    </div>
  );
}

export default SearchBar;
