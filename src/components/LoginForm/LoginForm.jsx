import React, { useState } from "react";
import * as S from "./styled";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import welcomeLogin from "../../assets/svg/welcomeLogin.svg";
import loginImage from "../../assets/svg/loginImage.svg";
import close from "../../assets/svg/close.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../validation/loginSchema";

const LoginForm = () => {
  const { login, sendResetPassword } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();
  const [modalVisible, setModalVisible] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitForm = async (data, e) => {
    console.log("here");
    e.preventDefault();
    try {
      setError("");
      await login(data.email, data.password);
      history.push("/home");
    } catch {
      setError("Failed to sign in");
    }
  };

  const submitResetPasswordForm = async (data, e) => {
    e.preventDefault();
    console.log(data);
    // sendResetPassword(data.email);
  };

  return (
    <S.Container>
      <S.BackgroundContainer></S.BackgroundContainer>
      <S.ContainerLeft>
        {/* <h1>Welcome Back</h1>
        <h2>To log in please enter your email and password</h2>  */}

        {error && <p>{error}</p>}

        <S.Form onSubmit={handleSubmit(submitForm)}>
          <S.WelcomeTitle src={welcomeLogin} alt="welcomeLogin" />
          <Input
            type="text"
            name="email"
            placeholder="johndoe@email.com"
            refs={register}
            errors={errors.email?.message}
            label="Email"
          />
          <Input
            type="password"
            name="password"
            placeholder="••••••••"
            refs={register}
            errors={errors.password?.message}
            label="Password"
          />
          <Button type="submit" title="Login" />
          <S.SignupLinkContainer>
            <p> Need an account? </p>
            <Link to="/signup">Sign Up</Link>
          </S.SignupLinkContainer>
        </S.Form>

        {/* <Button title="open modal" onClick={() => setModalVisible(true)} />
        <S.Modal visible={modalVisible}>
          <h3>Forgot your password?</h3>

          <form onSubmit={handleSubmit(submitResetPasswordForm)}>
            <Input
              type="text"
              name="resetEmail"
              placeholder="johndoe@email.com"
              refs={register}
              errors={errors.resetEmail?.message}
              label="Email"
            />
            <Button type="submit" title="Send" />
          </form>

          <S.Close
            src={close}
            alt="Close"
            onClick={() => setModalVisible(false)}
          />
        </S.Modal> */}
      </S.ContainerLeft>

      <S.ContainerRight>
        <S.Image src={loginImage} alt="login" />
      </S.ContainerRight>
    </S.Container>
  );
};

export default LoginForm;
