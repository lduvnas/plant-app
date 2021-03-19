import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import PlantList from "../../components/PlantList";
import { db } from "../../firebase";

const HomePage = () => {
  const [error, setError] = useState();
  const [favoritesList, setFavoritesList] = useState([]);
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  function fetchFavorites() {
    db.collection("users")
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        console.log(doc.data().favorites);
        setFavoritesList(doc.data().favorites);
      });
  }

  return (
    <S.Container>
      <h2>HomePage</h2>
      <strong>email: </strong> {currentUser.email}
      <button onClick={handleLogout}>Log out</button>
      {favoritesList && favoritesList.length !== 0 ? <h3>Your garden:</h3> : ""}
      {favoritesList.length === 0 ? (
        <p>Inga plantor än</p>
      ) : (
        favoritesList.map((item) => {
          return <p>{item}</p>;
        })
      )}
      <PlantList />
    </S.Container>
  );
};

export default HomePage;
