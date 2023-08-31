import React, { useEffect, useState } from "react";
import axios from "axios";

import { NavBar, Search, NumResults, CarsList, Main } from "./components";

export default function App() {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/joaofs/6a4eb62499572a29485ac5924a0c9e64/raw/97ac2191e65fb6d84f6f336dc8867efbc97410a3/cars.json"
      )
      .then((response) => {
        setCars(response.data);
        // console.log("Fetched Data:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredCars = cars.filter(
    (car) =>
      car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setIsSearched(searchQuery !== "");
  }, [searchQuery]);

  return (
    <>
      <NavBar>
        <Search setSearchQuery={setSearchQuery} />
        <NumResults cars={filteredCars} isSearched={isSearched} />
      </NavBar>

      <Main>{isSearched && <CarsList cars={filteredCars} />}</Main>
    </>
  );
}
