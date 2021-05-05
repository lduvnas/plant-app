import React from "react";
import * as S from "./styled";
import landing from "../../assets/svg/landing.svg";
import welcome from "../../assets/svg/welcome.svg";
import Button from "../../components/Button";
import { Link, useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();
  return (
    <S.Container>
      <S.WelcomeContainer>
        {/* <S.Title>Welcome</S.Title>
        <S.SubTitle>keep your plants alive</S.SubTitle> */}
        <S.Welcome src={welcome} alt="welcome" />
        <S.Description>
          Don’t forget to take care of your plants. Lets grow your lovely plant
          and manage your entire garden.
        </S.Description>
        <Button onClick={() => history.push("/signup")} title="Sign up" />
        <Link to="/login">Already have an account? Login here</Link>
      </S.WelcomeContainer>
      <S.Image src={landing} alt="landing" />
    </S.Container>
  );
};

export default LandingPage;
