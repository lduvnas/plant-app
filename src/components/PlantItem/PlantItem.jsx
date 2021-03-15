import React from "react";
import * as S from "./styled";

const PlantItem = ({ title, description, img, id, temperature }) => {
  return (
    <S.Container>
      <S.Image src={img} />
      <h4>{title}</h4>
      <p>{description}</p>
      <p>{temperature}</p>
    </S.Container>
  );
};

export default PlantItem;
