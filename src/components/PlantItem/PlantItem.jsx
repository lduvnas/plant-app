import React from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";
import sunny from "../../assets/svg/sunny.svg";
import partlyCloudy from "../../assets/svg/partlyCloudy.svg";
import cloudy from "../../assets/svg/cloudy.svg";
import { useSpring } from "react-spring";

const PlantItem = ({ title, careLevel, img, id, temperature, light }) => {
  const history = useHistory();
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500,
  });

  const getLightIcon = () => {
    if (light === "Low") return <S.Icon src={cloudy} alt="" />;
    if (light === "Medium") return <S.Icon src={partlyCloudy} alt="" />;
    if (light === "High") return <S.Icon src={sunny} alt="" />;
  };

  return (
    <S.Container style={props} onClick={() => history.push(`/plants/${id}`)}>
      <S.Image src={img} />
      <h3>{title}</h3>
      <S.DetailsContainer>
        <S.LevelCard>
          <p>Level: {careLevel}</p>
        </S.LevelCard>
        <S.LightCard>{getLightIcon()}</S.LightCard>
      </S.DetailsContainer>
    </S.Container>
  );
};

export default PlantItem;
