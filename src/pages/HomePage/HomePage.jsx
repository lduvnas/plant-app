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
      <UserPlantList />
      <PlantList plantListData={plantListData} />
    </S.Container>
  );
};

export default HomePage;
