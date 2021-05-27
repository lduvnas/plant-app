import React from "react";
import * as S from "./styled";
import warning from "../../assets/svg/warning.svg";
import paperPlane from "../../assets/svg/paperPlane.svg";

const Input = ({
  type,
  placeholder,
  refs,
  onChange,
  name,
  errors,
  label,
  sendIcon,
}) => {
  return (
    <S.Container sendIcon={sendIcon}>
      <S.Label>{label}</S.Label>
      <S.InputWrapper>
        <S.Input
          type={type}
          name={name}
          placeholder={placeholder}
          ref={refs}
          onChange={onChange}
          errors={errors}
          sendIcon={sendIcon}
        />
        {sendIcon && (
          <S.SendButton type="submit">
            <S.PaperPlaneIcon src={paperPlane} alt="paper plane" />
          </S.SendButton>
        )}
      </S.InputWrapper>
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
