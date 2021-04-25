import React from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const PlantItem = ({ title, careLevel, img, id, temperature }) => {
  const history = useHistory();

  return (
    <S.Container>
      <FavoriteButton plantId={id} />
      <S.Image src={img} />
      <h4>{title}</h4>
      <p>{careLevel}</p>
      <p>{temperature}</p>
      <button onClick={() => history.push(`/plants/${id}`)}>Read more</button>
    </S.Container>
  );
};

export default PlantItem;
