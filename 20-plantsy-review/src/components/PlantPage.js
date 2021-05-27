import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plantsArray) => {
        setPlants(plantsArray);
      });
  }, []);

  // 1. define a callback function
  function handleAddNewPlant(newPlant) {
    const updatedPlants = [...plants, newPlant];
    setPlants(updatedPlants);
  }

  function handleUpdatePlant(updatedPlant) {
    console.log(plants);
    // create a new array of plants
    // swap the old plant with our updated plant
    const updatedPlants = plants.map((plantObj) => {
      if (plantObj.id === updatedPlant.id) {
        return updatedPlant;
      } else {
        return plantObj;
      }
    });
    setPlants(updatedPlants);
  }

  function handleRemovePlant(plantId) {
    // create a new array of plants that DOESN'T have the deleted plant in it
    // const updatedPlants = plants.filter(plantObj => {
    //   if (plantObj.id === plantId) {
    //     return false
    //   } else {
    //     return true
    //   }
    // })
    const updatedPlants = plants.filter((plantObj) => plantObj.id !== plantId);
    setPlants(updatedPlants);
  }

  function handleUpdateSearch(newSearch) {
    setSearchTerm(newSearch);
  }

  return (
    <main>
      {/* 2. pass the callback as a prop */}
      <NewPlantForm onAddNewPlant={handleAddNewPlant} />
      <Search searchTerm={searchTerm} onUpdateSearch={handleUpdateSearch} />
      <PlantList
        plants={plants}
        searchTerm={searchTerm}
        onRemovePlant={handleRemovePlant}
        onUpdatePlant={handleUpdatePlant}
      />
    </main>
  );
}

export default PlantPage;

/*
React Array CRUD

Create: [...] spread!
Delete: .filter!
Update: .map!
*/
