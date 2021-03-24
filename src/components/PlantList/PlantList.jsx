import React, { useState } from "react";
import PlantItem from "../PlantItem/PlantItem";
import * as S from "./styled";

const PlantList = ({ plantListData }) => {
  return (
    <S.Container>
      {/* Checks if there is something in plantListData,
       if so iterates over plantlist and put values in PlantItem */}
      {plantListData &&
        plantListData.map((plant) => {
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
    </S.Container>
  );
};

export default PlantList;
