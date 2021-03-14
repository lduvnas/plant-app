import React from "react";
import * as S from "./styled";
import LoginForm from "../../components/LoginForm";
import SignupForm from "../../components/SignupForm";

const LandingPage = () => {
  return (
    <S.Container>
      <h2>LandingPage</h2>
      <SignupForm />
      {/* <LoginForm /> */}
    </S.Container>
  );
};

export default LandingPage;
