import React, { useState } from "react";
import * as S from "./styled";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import PlantList from "../../components/PlantList";

const HomePage = () => {
  const [error, setError] = useState();
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

  return (
    <S.Container>
      <h2>HomePage</h2>
      <strong>email: </strong> {currentUser.email}
      <button onClick={handleLogout}>Log out</button>
      <PlantList />
    </S.Container>
  );
};

export default HomePage;
