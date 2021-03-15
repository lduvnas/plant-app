import React from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

const PlantItem = ({ title, description, img, id, temperature }) => {
  const history = useHistory();
  return (
    <S.Container onClick={() => history.push(`/plant/${id}`)}>
      <S.Image src={img} />
      <h4>{title}</h4>
      <p>{description}</p>
      <p>{temperature}</p>
    </S.Container>
  );
};

export default PlantItem;
