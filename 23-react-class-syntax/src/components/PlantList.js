import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchTerm, onRemovePlant, onUpdatePlant }) {
  // [{},{},{}] filter => [{},{}] map => [<PlantCard />, <PlantCard />]
  const filteredPlants = plants.filter((plantObj) => {
    // check the name of the plant, return true if it matches the search term
    return plantObj.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const plantCards = filteredPlants.map((plantObj) => {
    return (
      <PlantCard
        key={plantObj.id}
        plant={plantObj}
        onRemovePlant={onRemovePlant}
        onUpdatePlant={onUpdatePlant}
      />
    );
  });

  return <ul className="cards">{plantCards}</ul>;
}

export default PlantList;
