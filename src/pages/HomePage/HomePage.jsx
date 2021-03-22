import React, { useState, useContext } from "react";
import * as S from "./styled";
import { useAuth } from "../../contexts/AuthContext";
import { PlantContext } from "../../contexts/PlantContextProvider";
import { Link, useHistory } from "react-router-dom";
import PlantList from "../../components/PlantList";
import UserPlantList from "../../components/UserPlantList/UserPlantList";

const HomePage = () => {
  const { plantListData } = useContext(PlantContext);
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
      <Link to="/explore">Explore</Link>
      <strong>email: </strong> {currentUser.email}
      <button onClick={handleLogout}>Log out</button>
      <UserPlantList />
      <PlantList plantListData={plantListData} />
    </S.Container>
  );
};

export default HomePage;
