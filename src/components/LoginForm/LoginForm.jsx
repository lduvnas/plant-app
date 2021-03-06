import React, { useRef, useState } from "react";
import * as S from "./styled";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
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
  }

  return (
    <S.Container>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <S.Form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" ref={emailRef} required />
        <input
          type="password"
          placeholder="password"
          ref={passwordRef}
          required
        />
        <button disabled={loading} type="submit">
          Login
        </button>
        Need an account? <Link to="/signup">Sign Up</Link>
      </S.Form>
    </S.Container>
  );
};

export default LoginForm;
