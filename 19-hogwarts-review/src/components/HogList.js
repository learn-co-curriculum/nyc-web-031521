import Filter from "./Filter";
import HogTile from "./HogTile";

import hogs from "../porkers_data";
import { useState } from "react";

function HogList() {
  const [isShowingOnlyGreased, setIsShowingOnlyGreased] = useState(true);
  const [sortBy, setSortBy] = useState("name"); // name, weight

  // Assembly Line
  // [{},{},{},{}] => [{}, {}] => [{1},{2}] => [<HogTile />, <HogTile />]

  // []
  // hog.greased = true

  const filteredHogs = hogs.filter((hog) => {
    if (isShowingOnlyGreased) {
      // if isShowingOnlyGreased == true, return only return the hogs that are greased
      return hog.greased;
    } else {
      // otherwise, return all the hogs
      return true;
    }
  });

  const sortedHogs = filteredHogs.sort((hogA, hogB) => {
    if (sortBy === "name") {
      return hogA.name.localeCompare(hogB.name);
    } else {
      return hogA.weight - hogB.weight;
    }
  });

  const hogTiles = sortedHogs.map((hog) => {
    return <HogTile key={hog.name} hog={hog} />;
  });

  function handleUpdateGreasedFilter() {
    setIsShowingOnlyGreased(!isShowingOnlyGreased);
  }

  function handleUpdateSort(newSort) {
    console.log(newSort);
    setSortBy(newSort);
  }

  return (
    <div>
      <Filter
        isShowingOnlyGreased={isShowingOnlyGreased}
        onUpdateGreasedFilter={handleUpdateGreasedFilter}
        sortBy={sortBy}
        onUpdateSort={handleUpdateSort}
      />
      {hogTiles}
    </div>
  );
}

export default HogList;
