import React, { useContext } from "react";
import * as S from "./styled";
import { PlantContext } from "../../contexts/PlantContextProvider";
import PlantItem from "../PlantItem/PlantItem";

const UserPlantList = () => {
  const { plantListData, favoritesListData } = useContext(PlantContext);

  return (
    <S.Container>
      <h3>UserPlantList</h3>
      {favoritesListData && favoritesListData.length === 0 ? (
        <p>No plants yet</p>
      ) : (
        ""
      )}
      {plantListData &&
        plantListData
          .filter((plant) => {
            if (favoritesListData.includes(plant.id)) {
              return plant;
            }
          })
          .map((plant) => {
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

export default UserPlantList;
