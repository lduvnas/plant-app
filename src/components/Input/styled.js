import styled from "styled-components";
import { COLORS } from "../../constants";

export const Container = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  height: 90px;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
  /* margin-left: 20px; */
`;

export const Input = styled.input`
  /* width: 100%; */
  padding: 15px;
  /* margin: 8px 0; */
  /* box-sizing: border-box; */

  border: ${({ errors }) => (errors ? `1px solid #f37673` : `none`)};
  /* border: 1px solid #f37673; */
  background-color: ${COLORS.neutral_1};
  border-radius: 8px;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  color: ${COLORS.neutral_2};
  font-size: 12px;
  outline: none;

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
  /* font-size: 10px; */
  /* height: 22px; */
  align-self: flex-end;
`;

export const ErrorMessage = styled.span`
  color: #f37673;
  display: flex;
  align-items: center;
  font-size: 10px;
  /* height: 10px; */
`;

export const WarningIcon = styled.img`
  height: 10px;
  margin-right: 5px;
`;
