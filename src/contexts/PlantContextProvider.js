import React, { createContext, useState, useEffect } from "react";
import { db } from "../firebase";

export const PlantContext = createContext({});

export default function JobContextProvider({ children }) {
  const [plantListData, setPlantListData] = useState([]);

  function fetchPlants() {
    return db.collection("plants").onSnapshot((snapshot) => {
      const plantData = [];
      snapshot.forEach((doc) => plantData.push({ ...doc.data(), id: doc.id }));
      console.log("Fetching");
      setPlantListData(plantData);
    });
  }

  console.log(plantListData);

  useEffect(() => {
    fetchPlants();
  }, []);

  return (
    <PlantContext.Provider
      value={{
        plantListData,
        setPlantListData,
      }}
    >
      {children}
    </PlantContext.Provider>
  );
}
