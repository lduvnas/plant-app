import React, { useRef, useState } from "react";
import * as S from "./styled";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
// import gardening from "../../assets/svg/gardening.svg";
// import login from "../../assets/svg/login.svg";
// import login from "../../assets/svg/login.svg";
import welcomeLogin from "../../assets/svg/welcomeLogin.svg";
import loginImage from "../../assets/svg/loginImage.svg";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/home");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  };

  return (
    <S.Container>
      <S.ContainerLeft>
        {/* <h1>Welcome Back</h1>
        <h2>To log in please enter your email and password</h2> */}

        {error && <p>{error}</p>}
        <S.Form onSubmit={handleSubmit}>
          <S.WelcomeTitle src={welcomeLogin} alt="welcomeLogin" />
          <Input
            type="email"
            placeholder="email"
            refs={emailRef}
            required="required"
          />
          <Input
            type="password"
            placeholder="password"
            refs={passwordRef}
            required
          />
          <Button disabled={loading} type="submit" title="Login" />
          Need an account? <Link to="/signup">Sign Up</Link>
        </S.Form>
      </S.ContainerLeft>

      <S.ContainerRight>
        <S.Image src={loginImage} alt="login" />
      </S.ContainerRight>

      {/* <S.Image src={gardening} alt="gardening" /> */}
    </S.Container>
  );
};

export default LoginForm;
