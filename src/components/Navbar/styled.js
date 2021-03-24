import styled from "styled-components";
import { COLORS } from "../../constants";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  min-height: 90px;
  background-color: ${COLORS.neutral_1};
  margin: 2em 0;
  border-radius: 8px;
  padding: 0.5em 3em;
`;

export const Circle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  background-color: ${COLORS.neutral_2};
  border-radius: 50%;
  left: 50%;
  top: 120px;
  transform: translate(-50%, -50%);
`;
