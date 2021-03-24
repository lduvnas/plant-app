import React from "react";
import * as S from "./styled";
import landing from "../../images/landing.svg";
import Button from "../../components/Button";
import { Link, useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();
  return (
    <S.Container>
      <S.WelcomeContainer>
        <h1>Welcome</h1>
        <h1>keep your plants alive</h1>
        <p>
          Don’t forget to take care of your plants. Lets grow your lovely plant
          and manage your entire garden.
        </p>
        <Button onClick={() => history.push("/signup")} title="Sign up" />
        <Link to="/login">Already have an account? Login here</Link>
      </S.WelcomeContainer>
      <img src={landing} alt="landing" />
    </S.Container>
  );
};

export default LandingPage;
