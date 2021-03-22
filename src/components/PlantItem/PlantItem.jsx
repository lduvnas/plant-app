import React from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const PlantItem = ({ title, description, img, id, temperature }) => {
  const history = useHistory();
  const { addToUserCollection, removeFromUserCollection } = useAuth();

  function handleOnClick() {
    addToUserCollection(id);
  }

  function removeFromFavorites() {
    removeFromUserCollection(id);
  }

  return (
    <S.Container>
      <S.Image src={img} />
      <h4>{title}</h4>
      <p>{description}</p>
      <p>{temperature}</p>
      <button onClick={handleOnClick}>Add to favorites</button>
      <button onClick={removeFromFavorites}>Remove from favorites</button>
      <button onClick={() => history.push(`/plants/${id}`)}>Read more</button>
    </S.Container>
  );
};

export default PlantItem;
