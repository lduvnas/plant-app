import React from "react";
import * as S from "./styled";

const PlantItem = ({ title, description, img, id, temperature }) => {
  return (
    <S.Container>
      <strong>{id}</strong>
      <h4>{title}</h4>
      <p>{description}</p>
      <img src={img} />
      <p>{temperature}</p>
    </S.Container>
  );
};

export default PlantItem;
