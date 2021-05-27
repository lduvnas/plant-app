import React, { useState, useRef, useContext } from "react";
import * as S from "./styled";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useDetectOutsideClick } from "../../useDetectOutsideClick";
import avatar from "../../assets/svg/avatar.svg";
import plant from "../../assets/svg/plant.svg";
import logo from "../../assets/svg/logo.svg";
import { PlantContext } from "../../contexts/PlantContextProvider";

const Navbar = () => {
  const history = useHistory();
  const { logout } = useAuth();
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
    }
  };

  return (
    <S.Container>
      <S.Logo src={logo} alt="logo" onClick={() => history.push("/home")} />
      <S.Circle>
        <img src={plant} alt="plant" />
        <Link to="/explore">Explore</Link>
      </S.Circle>

      <div>
        <S.MenuTrigger onClick={onClick}>
          <span>{userData.displayName}</span>
          {userData.userImg ? (
            <S.Image src={userData.userImg} alt="" />
          ) : (
            <S.Image src={avatar} alt="avatar" />
          )}
        </S.MenuTrigger>

        <S.Menu as="nav" ref={dropdownRef} clicked={isActive}>
          <S.ArrowUp />
          <S.Link onClick={() => history.push("/edit")}>Edit profile</S.Link>
          <S.Link onClick={handleLogout}>Log out</S.Link>
        </S.Menu>
      </div>
      {error}
    </S.Container>
  );
};

export default Navbar;
