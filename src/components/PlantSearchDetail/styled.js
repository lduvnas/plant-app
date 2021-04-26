import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled(animated.div)`
  /* max-width: 300px; */
  width: 350px;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
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
  /* display: flex;
  flex-direction: column; */
  width: 100%;
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
`;

export const Icon = styled.img`
  height: 18px;
`;
