import styled from "styled-components";
import { COLORS } from "../../constants";

export const Input = styled.input`
  width: 100%;
  padding: 20px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  background-color: ${COLORS.neutral_1};
  border-radius: 8px;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  color: ${COLORS.neutral_2};
  font-size: 12px;
  outline: none;
`;
