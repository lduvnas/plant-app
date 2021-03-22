import React, { createContext, useState, useEffect } from "react";
import { db } from "../firebase";
import { useAuth } from "./AuthContext";

export const PlantContext = createContext({});

export default function JobContextProvider({ children }) {
  const [plantListData, setPlantListData] = useState([]);
  const [favoritesListData, setFavoritesListData] = useState([]);
  const { currentUser } = useAuth();

  function fetchPlants() {
    return db.collection("plants").onSnapshot((snapshot) => {
      const plantData = [];
      snapshot.forEach((doc) => plantData.push({ ...doc.data(), id: doc.id }));
      console.log("Fetching");
      setPlantListData(plantData);
    });
  }

  function fetchFavorites() {
    return db
      .collection("users")
      .doc(currentUser.uid)
      .onSnapshot((doc) => {
        console.log("fetching favorites");
        setFavoritesListData(doc.data().favorites);
      });
  }

  useEffect(() => {
    fetchFavorites();
    fetchPlants();
  }, []);

  return (
    <PlantContext.Provider
      value={{
        plantListData,
        setPlantListData,
        favoritesListData,
      }}
    >
      {children}
    </PlantContext.Provider>
  );
}
