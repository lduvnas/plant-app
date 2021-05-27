import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled(animated.div)`
  width: 350px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  min-width: 120px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 2em;
`;

export const DetailsContainer = styled.div`
  width: 100%;
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 140px;
`;

export const LevelCard = styled.div`
  color: #bdbdbd;
`;

export const LightCard = styled.div`
  background-color: #dbedea;
  border-radius: 10px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 60px;
  font-size: 10px;
  margin-right: 5px;
`;

export const Icon = styled.img`
  height: 18px;
`;
