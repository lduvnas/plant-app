import React, { useState, useEffect } from "react";
import PlantItem from "../PlantItem/PlantItem";
import { db } from "../../firebase";
import * as S from "./styled";

const PlantList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [plantList, setPlantList] = useState();

  function fetchPlants() {
    return db.collection("plants").onSnapshot((snapshot) => {
      const plantData = [];
      snapshot.forEach((doc) => plantData.push({ ...doc.data(), id: doc.id }));
      console.log(plantData);
      setPlantList(plantData);
    });
  }

  useEffect(() => {
    fetchPlants();
  }, []);

  console.log("PlantList: ", plantList);

  return (
    <S.Container>
      <h3>PlantList</h3>

      <input
        type="text"
        placeholder="search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      {plantList &&
        plantList.map((plant) => {
          return (
            <PlantItem
              key={plant.id}
              id={plant.id}
              title={plant.title}
              description={plant.description}
              img={plant.imageURL}
              temperature={plant.temperature}
            />
          );
        })}

      {/* {plantList
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
        })} */}
    </S.Container>
  );
};

export default PlantList;
