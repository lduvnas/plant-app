import React from "react";
import * as S from "./styled";
import warning from "../../assets/svg/warning.svg";

const Input = ({
  type,
  placeholder,
  refs,
  required,
  onChange,
  name,
  errors,
  label,
}) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input
        type={type}
        name={name}
        placeholder={placeholder}
        ref={refs}
        // required={required}
        onChange={onChange}
        errors={errors}
      />
      <S.ErrorMessageContainer>
        {errors && (
          <S.ErrorMessage>
            <S.WarningIcon src={warning} alt="warning" /> {errors}
          </S.ErrorMessage>
        )}
      </S.ErrorMessageContainer>
    </S.Container>
  );
};

export default Input;
