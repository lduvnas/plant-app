import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

const UserPlantList = () => {
  const [favoritesList, setFavoritesList] = useState([]);

  const { currentUser } = useAuth();

  useEffect(() => {
    fetchFavorites();
  }, []);

  function fetchFavorites() {
    db.collection("users")
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        console.log("your garden: " + doc.data().favorites);
        setFavoritesList(doc.data().favorites);
      });
  }

  return (
    <S.Container>
      <h1>UserPlantList</h1>
      {favoritesList && favoritesList.length !== 0 ? <h3>Your garden:</h3> : ""}
      {favoritesList.length === 0 ? (
        <p>Inga plantor än</p>
      ) : (
        favoritesList.map((item) => {
          return <p>{item}</p>;
        })
      )}
    </S.Container>
  );
};

export default UserPlantList;
