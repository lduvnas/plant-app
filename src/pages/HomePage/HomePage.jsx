import React, { useContext } from "react";
import * as S from "./styled";
import { PlantContext } from "../../contexts/PlantContextProvider";
import PlantList from "../../components/PlantList";
import UserPlantList from "../../components/UserPlantList/UserPlantList";
import Navbar from "../../components/Navbar";
import wave1 from "../../assets/svg/wave1.svg";
import wave2 from "../../assets/svg/wave2.svg";

const HomePage = () => {
  const { plantListData } = useContext(PlantContext);

  return (
    <S.Container>
      <Navbar />

      <S.Wave1 src={wave1} alt="wave" />
      <div>
        <S.Title>Your Garden</S.Title>
        <UserPlantList />
        <S.Title>Discover</S.Title>
        <PlantList plantListData={plantListData} />
      </div>
      <S.Wave2 src={wave2} alt="wave" />
    </S.Container>
  );
};

export default HomePage;
