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
      console.log("Fetching");
      setPlantListData(plantData);
    });
  };

  const fetchFavorites = () => {
    if (currentUser !== null) {
      return db
        .collection("users")
        .doc(currentUser.uid)
        .onSnapshot((doc) => {
          console.log("fetching favorites");
          setUserData(doc.data());
          setFavoritesListData(doc.data().favorites);
          console.log("userdata:", doc.data());
        });
    }
  };

  // const getUserData = () => {
  //   return db
  //     .collection("users")
  //     .doc(currentUser.uid)
  //     .onSnapshot((doc) => {
  //       console.log("fetching userData");
  //       if (doc.exists) {
  //         setUserData(doc.data());
  //         console.log(userData);
  //       }
  //     });
  // };

  useEffect(() => {
    fetchFavorites();
    fetchPlants();
    // getUserData();
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
