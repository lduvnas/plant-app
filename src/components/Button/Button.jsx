import React from "react";
import * as S from "./styled";

const Button = ({ title, onClick }) => {
  return <S.Button onClick={onClick}>{title}</S.Button>;
};

export default Button;
