import React, { useState, useRef } from "react";
import * as S from "./styled";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useDetectOutsideClick } from "../../useDetectOutsideClick";
import avatar from "../../assets/svg/avatar.svg";
import plant from "../../assets/svg/plant.svg";

const Navbar = () => {
  const history = useHistory();
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState();
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const onClick = () => setIsActive(!isActive);

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
        <img src={plant} alt="plant" />
        <Link to="/explore">Explore</Link>
      </S.Circle>

      <div>
        <S.MenuTrigger onClick={onClick}>
          <span>{currentUser.email}</span>
          <img src={avatar} alt="avatar" />
        </S.MenuTrigger>

        <S.Menu as="nav" ref={dropdownRef} clicked={isActive}>
          <S.ArrowUp />
          <Link onClick={() => history.push("/edit")}>Edit profile</Link>
          <Link onClick={handleLogout}>Log out</Link>
        </S.Menu>
      </div>
    </S.Container>
  );
};

export default Navbar;
