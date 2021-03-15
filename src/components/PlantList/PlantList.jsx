import React, { useState, useEffect } from "react";
import PlantItem from "../PlantItem/PlantItem";
import * as S from "./styled";

const PlantList = () => {
  let [plantList, setPlantList] = useState([]);

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
      {plantList.map((item, index) => {
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
