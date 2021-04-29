import React, { useRef, useState } from "react";
import * as S from "./styled";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Input from "../Input";
import Button from "../Button";

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
      <h1>Sign Up</h1>
      {error && <p>{error}</p>}
      <S.Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="display name" refs={nameRef} required />
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
        already have an account? <Link to="/login">Login Up</Link>
      </S.Form>
    </S.Container>
  );
};

export default SignupForm;
