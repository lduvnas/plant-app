import styled from "styled-components";
import { COLORS } from "../../constants";

export const Button = styled.button`
  background-color: ${COLORS.text};
  border: none;
  border-radius: 8px;
  color: ${COLORS.neutral_1};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  font-weight: 700;
  cursor: pointer;
`;
