import styled from "styled-components";
import { COLORS } from "../../constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ sendIcon, unsetHeight }) =>
    sendIcon || unsetHeight ? `unset` : `90px`};
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
`;

export const Input = styled.input`
  padding: 15px;
  border: ${({ errors }) => (errors ? `1px solid #f37673` : `none`)};
  background-color: ${COLORS.neutral_1};
  border-radius: 8px;
  color: ${COLORS.neutral_2};
  font-size: 12px;
  outline: none;
  width: 100%;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #4545455e;
  }
  :-ms-input-placeholder {
    color: #4545455e;
  }
`;

export const ErrorMessageContainer = styled.p`
  display: flex;
  align-items: center;
  align-self: flex-end;
`;

export const ErrorMessage = styled.span`
  color: #f37673;
  display: flex;
  align-items: center;
  font-size: 10px;
`;

export const WarningIcon = styled.img`
  height: 10px;
  margin-right: 5px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SendButton = styled.button`
  background-color: ${COLORS.text};
  border: none;
  color: ${COLORS.neutral_1};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  position: absolute;
  height: 100%;
  width: 50px;
  border-radius: 0 8px 8px 0;
  right: 0px;
  :hover {
    opacity: 0.7;
    transition-duration: 0.5s;
  }
`;

export const PaperPlaneIcon = styled.img`
  height: 20px;
`;
