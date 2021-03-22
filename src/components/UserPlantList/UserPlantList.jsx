import React, { useState, useEffect, useContext } from "react";
import * as S from "./styled";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import { PlantContext } from "../../contexts/PlantContextProvider";
import PlantItem from "../PlantItem/PlantItem";

const UserPlantList = () => {
  const [favoritesList, setFavoritesList] = useState([]);
  const { plantListData } = useContext(PlantContext);

  const { currentUser } = useAuth();

  useEffect(() => {
    fetchFavorites();
  }, []);

  function fetchFavorites() {
    db.collection("users")
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        setFavoritesList(doc.data().favorites);
      });
  }

  console.log(favoritesList);
  return (
    <S.Container>
      <h3>UserPlantList</h3>
      {favoritesList && favoritesList.length === 0 ? <p>No plants yet</p> : ""}
      {plantListData &&
        plantListData
          .filter((plant) => {
            if (favoritesList.includes(plant.id)) {
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
