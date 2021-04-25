import React from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import sun from "../../assets/svg/sun.svg";
import water from "../../assets/svg/water.svg";
import temperature from "../../assets/svg/temperature.svg";

const PlantItem = ({ title, careLevel, img, id, temperature, light }) => {
  const history = useHistory();

  const getLightIcon = () => {
    if (light === "Low") return <img src={sun} alt="" />;
    if (light === "Medium") return <img src={water} alt="" />;
    if (light === "High") return <img src={temperature} alt="" />;
  };

  return (
    <S.Container>
      <FavoriteButton plantId={id} />
      <S.Image src={img} />
      <h3>{title}</h3>
      <S.LevelCard>
        <p>Level: {careLevel}</p>
      </S.LevelCard>
      <S.LightCard>
        {/* <p>Plant light: {light}</p> */}
        {getLightIcon()}
      </S.LightCard>

      <button onClick={() => history.push(`/plants/${id}`)}>Read more</button>
    </S.Container>
  );
};

export default PlantItem;
