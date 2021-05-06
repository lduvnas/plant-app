import React, { useRef, useState } from "react";
import * as S from "./styled";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import welcomeLogin from "../../assets/svg/welcomeLogin.svg";
import loginImage from "../../assets/svg/loginImage.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../validation/loginSchema";

const LoginForm = () => {
  // const emailRef = useRef();
  //   const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitForm = async (data) => {
    // e.preventDefault();
    console.log(data.email, data.password);
    try {
      setError("");
      setLoading(true);
      await login(data.email, data.password);
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
        <h2>To log in please enter your email and password</h2>  */}

        {error && <p>{error}</p>}
        <S.WelcomeTitle src={welcomeLogin} alt="welcomeLogin" />
        <S.Form onSubmit={handleSubmit(submitForm)}>
          <Input type="text" name="email" placeholder="email" refs={register} />
          <p>{errors.email?.message}</p>
          <Input
            type="text"
            name="password"
            placeholder="password"
            refs={register}
          />
          <p>{errors.password?.message}</p>
          <Button type="submit" title="Login" />
          Need an account? <Link to="/signup">Sign Up</Link>
        </S.Form>
      </S.ContainerLeft>

      <S.ContainerRight>
        <S.Image src={loginImage} alt="login" />
      </S.ContainerRight>
    </S.Container>
  );
};

export default LoginForm;
