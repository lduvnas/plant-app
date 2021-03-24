import React from "react";
import * as S from "./styled";

const Input = ({ type, placeholder, refs, required, onChange }) => {
  return (
    <>
      <S.Input
        type={type}
        placeholder={placeholder}
        ref={refs}
        required={required}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
