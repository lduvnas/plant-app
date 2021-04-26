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
      <div>
        <h2>Your Garden</h2>
        <UserPlantList />
        <h2>Discover</h2>
        <PlantList plantListData={plantListData} />
      </div>
    </S.Container>
  );
};

export default HomePage;
