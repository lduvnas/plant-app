import React, { createContext, useState, useEffect } from "react";
import { db } from "../firebase";
import { useAuth } from "./AuthContext";

export const PlantContext = createContext({});

export default function PlantContextProvider({ children }) {
  const [plantListData, setPlantListData] = useState([]);
  const [favoritesListData, setFavoritesListData] = useState([]);
  const [userData, setUserData] = useState({});

  const { currentUser } = useAuth();

  const fetchPlants = () => {
    return db.collection("plants").onSnapshot((snapshot) => {
      const plantData = [];
      snapshot.forEach((doc) => plantData.push({ ...doc.data(), id: doc.id }));
      setPlantListData(plantData);
    });
  };

  const fetchFavorites = () => {
    if (currentUser !== null) {
      return db
        .collection("users")
        .doc(currentUser.uid)
        .onSnapshot((doc) => {
          setUserData(doc.data());
          setFavoritesListData(doc.data().favorites);
        });
    }
  };

  useEffect(() => {
    fetchFavorites();
    fetchPlants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  return (
    <PlantContext.Provider
      value={{
        plantListData,
        setPlantListData,
        favoritesListData,
        userData,
      }}
    >
      {children}
    </PlantContext.Provider>
  );
}
