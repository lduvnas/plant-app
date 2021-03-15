import React, { useState, useEffect } from "react";
import PlantItem from "../PlantItem/PlantItem";
import * as S from "./styled";

const PlantList = () => {
  let [plantList, setPlantList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function fetchPlants() {
    fetch("../../plants.json")
      .then((response) => response.json())
      .then((data) => setPlantList(data.plants));
  }

  useEffect(() => {
    fetchPlants();
  }, []);

  return (
    <S.Container>
      <h1>PlantList</h1>
      <input
        type="text"
        placeholder="search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {plantList
        .filter((item) => {
          if (searchTerm == "") {
            return item;
          } else if (
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return item;
          }
        })
        .map((item, index) => {
          return (
            <PlantItem
              key={index}
              id={index}
              title={item.title}
              description={item.description}
              img={item.img}
              temperature={item.temperature}
            />
          );
        })}
    </S.Container>
  );
};

export default PlantList;
