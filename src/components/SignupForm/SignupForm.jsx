import React, { useRef, useState } from "react";
import * as S from "./styled";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Input from "../Input";
import Button from "../Button";
import signup from "../../assets/svg/signup.svg";
import welcomeSignup from "../../assets/svg/welcomeSignup.svg";

const SignupForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signupWithEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signupWithEmail(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value
      );
      history.push("/login");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <S.Container>
      {/* <h1>Sign Up</h1> */}
      {error && <p>{error}</p>}
      <S.ContainerLeft>
        <S.Image src={signup} alt="signup" />
      </S.ContainerLeft>
      <S.ContainerRight>
        <S.Form onSubmit={handleSubmit}>
          <S.WelcomeTitle src={welcomeSignup} alt="signup" />
          <Input
            type="text"
            placeholder="display name"
            refs={nameRef}
            required
          />
          <Input type="email" placeholder="email" refs={emailRef} required />
          <Input
            type="password"
            placeholder="password"
            refs={passwordRef}
            required
          />
          <Input
            type="password"
            placeholder="password confirm"
            refs={passwordConfirmRef}
            required
          />
          <Button disabled={loading} type="submit" title="Sign Up" />
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
