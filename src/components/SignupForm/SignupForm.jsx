import React, { useState } from "react";
import * as S from "./styled";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Input from "../Input";
import Button from "../Button";
import signup from "../../assets/svg/signup.svg";
import welcomeSignup from "../../assets/svg/welcomeSignup.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import signupSchema from "../../validation/signupSchema";

const SignupForm = () => {
  const { signupWithEmail } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const submitForm = async (data, e) => {
    e.preventDefault();
    try {
      setError("");
      await signupWithEmail(data.email, data.password, data.displayName);
      history.push("/login");
    } catch {
      setError("Failed to create an account");
    }
  };

  return (
    <S.Container>
      {/* <h1>Sign Up</h1> */}
      {error && <p>{error}</p>}
      <S.ContainerLeft>
        <S.Image src={signup} alt="signup" />
      </S.ContainerLeft>
      <S.ContainerRight>
        <S.Form onSubmit={handleSubmit(submitForm)}>
          <S.WelcomeTitle src={welcomeSignup} alt="signup" />
          <Input
            type="text"
            name="displayName"
            placeholder="Joe Doe"
            refs={register}
            errors={errors.displayName?.message}
            label="Display name"
          />
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
          <Input
            type="password"
            name="passwordConfirmation"
            placeholder="••••••••"
            refs={register}
            errors={errors.passwordConfirmation?.message}
            label="Confirm password"
          />
          <Button type="submit" title="Sign Up" />
        </S.Form>
        <S.LinkContainer>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </S.LinkContainer>
      </S.ContainerRight>
    </S.Container>
  );
};

export default SignupForm;
