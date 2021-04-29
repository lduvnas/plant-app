import React, { useState, useRef, useContext } from "react";
import * as S from "./styled";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useDetectOutsideClick } from "../../useDetectOutsideClick";
import avatar from "../../assets/svg/avatar.svg";
import plant from "../../assets/svg/plant.svg";
import { PlantContext } from "../../contexts/PlantContextProvider";

const Navbar = () => {
  const history = useHistory();
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState();
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const { userData } = useContext(PlantContext);

  const onClick = () => setIsActive(!isActive);

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
      console.log(error);
    }
  };

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
          {userData.userImg ? (
            <S.Image src={userData.userImg} alt="" />
          ) : (
            <S.Image src={avatar} alt="avatar" />
          )}
        </S.MenuTrigger>

        <S.Menu as="nav" ref={dropdownRef} clicked={isActive}>
          <S.ArrowUp />
          <p onClick={() => history.push("/edit")}>Edit profile</p>
          <p onClick={handleLogout}>Log out</p>
        </S.Menu>
      </div>
    </S.Container>
  );
};

export default Navbar;
