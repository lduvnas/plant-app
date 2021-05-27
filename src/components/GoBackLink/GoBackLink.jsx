import React from "react";
import goBack from "../../assets/svg/goBack.svg";
import { useHistory } from "react-router-dom";
import * as S from "./styled";

const GoBackLink = () => {
  const history = useHistory();
  return (
    <S.GoBackText onClick={() => history.goBack()}>
      <img src={goBack} alt="go back" />
    </S.GoBackText>
  );
};

export default GoBackLink;
