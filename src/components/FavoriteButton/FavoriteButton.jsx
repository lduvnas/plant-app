import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { PlantContext } from "../../contexts/PlantContextProvider";
import * as S from "./styled";
import heart from "../../assets/svg/heart.svg";
import heartFilled from "../../assets/svg/heartFilled.svg";

const FavoriteButton = ({ plantId }) => {
  const [favorite, setFavorite] = useState(false);
  const { favoritesListData } = useContext(PlantContext);
  const { addToUserCollection, removeFromUserCollection } = useAuth();

  const isInFavorites = favoritesListData.includes(plantId);

  useEffect(() => {
    if (isInFavorites) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [isInFavorites]);

  const toggleFavorite = () => {
    if (isInFavorites) {
      removeFromUserCollection(plantId);
    } else {
      addToUserCollection(plantId);
    }
  };

  return (
    <S.HeartButton onClick={toggleFavorite}>
      {favorite ? (
        <S.HeartIcon src={heartFilled} alt="HeartFilled" />
      ) : (
        <S.HeartIcon src={heart} alt="heart" />
      )}
    </S.HeartButton>
  );
};

export default FavoriteButton;
