import React, { useRef, useState } from "react";
import * as S from "./styled";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, signupWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signupWithGoogle();
      history.push("/");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  };

  return (
    <S.Container>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <S.Form onSubmit={handleSubmit}>
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
      <S.Form>
        <h3>Google login</h3>
        <Button disabled={loading} onClick={handleOnSubmit} title="Sign Up" />
      </S.Form>
    </S.Container>
  );
};

export default LoginForm;
