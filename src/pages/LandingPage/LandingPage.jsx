import React from "react";
import * as S from "./styled";
import LoginForm from "../../components/LoginForm";

const LandingPage = () => {
  return (
    <S.Container>
      <h2>LandingPage</h2>
      <LoginForm />
    </S.Container>
  );
};

export default LandingPage;
