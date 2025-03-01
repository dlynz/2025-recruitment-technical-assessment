import React from "react";

const buildings = [
  {
    name: "AGSM",
    rooms_available: 9,
    building_picture: "/assets/ainsworth.webp",
  },
  {
    name: "Ainsworth Building",
    rooms_available: 16,
    building_picture: "/assets/ainsworth.webp",
  },
  {
    name: "Anita B Lawrence Centre",
    rooms_available: 44,
    building_picture: "/assets/anitab.webp",
  },
  {
    name: "Biological Sciences",
    rooms_available: 6,
    building_picture: "/assets/biologicalScience.webp",
  },
  {
    name: "Biological Science (West)",
    rooms_available: 8,
    building_picture: "/assets/biologicalScienceWest.webp",
  },
  {
    name: "Blockhouse",
    rooms_available: 42,
    building_picture: "/assets/blockhouse.webp",
  },
  {
    name: "Business School",
    rooms_available: 18,
    building_picture: "/assets/businessSchool.webp",
  },
  {
    name: "Civil Engineering Building",
    rooms_available: 8,
    building_picture: "/assets/civilBuilding.webp",
  },
  {
    name: "Colombo Building",
    rooms_available: 5,
    building_picture: "/assets/colombo.webp",
  },
  {
    name: "Computer Science & Eng (K17)",
    rooms_available: 0,
    building_picture: "/assets/cseBuilding.webp",
  },
];

const BuildingList = ({ searchQuery }) => {

  const filteredBuildings = buildings.filter((building) =>
    building.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[20px] p-4">
      {filteredBuildings.length > 0 ? (filteredBuildings.map((building) => (
        <div style={{
              backgroundImage: `url(${building.building_picture})`,
              backgroundSize: "cover",
              backgroundPosition: "center", 
              backgroundRepeat: "no-repeat"
            }} className="p-2 sm:aspect-square aspect-video bg-gray-300 rounded-lg flex flex-col justify-between items-center">
          <div className="w-full flex justify-end items-center">
            <div className="bg-white dark:bg-gray-900 duration-300 rounded-xl h-[40px] w-[154px] flex justify-center items-center">
              {building.rooms_available > 5 ? 
                <div className="rounded-full bg-green-500 w-2 h-2 mr-[10px]"></div> : 
                building.rooms_available > 0 ? 
                <div className="rounded-full bg-yellow-500 w-2 h-2 mr-[10px]"></div> :
                <div className="rounded-full bg-red-500 w-2 h-2 mr-[10px]"></div>
              }
              
              <p className="text-black dark:text-white font-semibold text-[12px]">{building.rooms_available} rooms available</p>
            </div>
          </div>
          <div className="bg-freerooms-orange flex p-4 justify-start items-center w-full h-[58px] rounded-lg text-white">
            <h2 className="text-sm font-semibold">{building.name}</h2>
          </div>
        </div>
        ))
      ) : (
        <p className="text-gray-500 col-span-3 text-center">No buildings found</p>
      )}
    </div>
  );
};

export default BuildingList;
