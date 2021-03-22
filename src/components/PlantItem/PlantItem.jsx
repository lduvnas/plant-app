import React, { useState, useContext, useEffect } from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { PlantContext } from "../../contexts/PlantContextProvider";

const PlantItem = ({ title, description, img, id, temperature }) => {
  const [heart, setHeart] = useState("♡");
  const history = useHistory();
  const { addToUserCollection, removeFromUserCollection } = useAuth();
  const { favoritesListData } = useContext(PlantContext);

  const isInFavorites = favoritesListData.includes(id);

  useEffect(() => {
    if (isInFavorites) {
      setHeart("❤");
    } else {
      setHeart("♡");
    }
  }, [isInFavorites]);

  function toggleFavorite() {
    if (isInFavorites) {
      removeFromUserCollection(id);
    } else {
      addToUserCollection(id);
    }
  }

  return (
    <S.Container>
      <S.Image src={img} />
      <h4>{title}</h4>
      <p>{description}</p>
      <p>{temperature}</p>
      <button onClick={() => history.push(`/plants/${id}`)}>Read more</button>
      <button onClick={toggleFavorite}>{heart}</button>
    </S.Container>
  );
};

export default PlantItem;
