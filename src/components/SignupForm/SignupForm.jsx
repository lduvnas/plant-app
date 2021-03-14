import React, { useRef, useState } from "react";
import * as S from "./styled";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const SignupForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/login");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <S.Container>
      <h1>Sign Up</h1>
      {error && <p>{error}</p>}
      <S.Form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" ref={emailRef} required />
        <input
          type="password"
          placeholder="password"
          ref={passwordRef}
          required
        />
        <input
          type="password"
          placeholder="password confirm"
          ref={passwordConfirmRef}
          required
        />
        <button disabled={loading} type="submit">
          Sign up
        </button>
        already have an account? <Link to="/login">Login Up</Link>
      </S.Form>
    </S.Container>
  );
};

export default SignupForm;
