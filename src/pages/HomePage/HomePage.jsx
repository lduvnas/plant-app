import React, { useContext } from "react";
import * as S from "./styled";
import { PlantContext } from "../../contexts/PlantContextProvider";
import PlantList from "../../components/PlantList";
import UserPlantList from "../../components/UserPlantList/UserPlantList";
import Navbar from "../../components/Navbar";

const HomePage = () => {
  const { plantListData } = useContext(PlantContext);

  return (
    <S.Container>
      <Navbar />
      <h2>HomePage</h2>
      <div>
        <h3>UserPlantList</h3>
        <UserPlantList />
        <h3>PlantList</h3>
        {/* <PlantList plantListData={plantListData} /> */}
      </div>
    </S.Container>
  );
};

export default HomePage;
