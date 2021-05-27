import React, { useContext } from "react";
import * as S from "./styled";
import { PlantContext } from "../../contexts/PlantContextProvider";
import PlantItem from "../PlantItem/PlantItem";

const UserPlantList = () => {
  const { plantListData, favoritesListData } = useContext(PlantContext);

  return (
    <S.Container>
      {favoritesListData && favoritesListData.length === 0 ? (
        <p>No plants yet</p>
      ) : (
        ""
      )}
      {plantListData &&
        plantListData
          .filter((plant) => {
            // Filter through plantListData and check if any IDs match what is in favoritesListData
            if (favoritesListData.includes(plant.id)) {
              return plant;
            }
            return null;
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
                careLevel={plant.careLevel}
                light={plant.light}
                nextWateringDate={plant.nextWateringDate}
                wateringInterval={plant.wateringInterval}
                isInFavorites={plant.isInFavorites}
              />
            );
          })}
    </S.Container>
  );
};

export default UserPlantList;
