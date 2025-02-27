import { useState } from "react";
import BuildingList from "./BuildingList";
import SearchBar from "./SearchBar";

function MainSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex-col justify-start pl-2 pr-2 items-center w-full border-b-gray-300">
      <SearchBar onSearch={setSearchQuery} />
      <BuildingList searchQuery={searchQuery} />
    </div>
  );
}

export default MainSection;
