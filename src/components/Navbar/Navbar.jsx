import React, { useState } from "react";
import * as S from "./styled";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const history = useHistory();
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState();

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
      <h1>LOGO</h1>
      <S.Circle>
        <Link to="/explore">Explore</Link>
      </S.Circle>
      <div>
        <strong>email: </strong> {currentUser.email}
        <button onClick={handleLogout}>Log out</button>
      </div>
    </S.Container>
  );
};

export default Navbar;
