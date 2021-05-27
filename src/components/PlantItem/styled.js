import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled(animated.div)`
  max-width: 220px;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 500px) {
    transform: scale(0.8);
  }
`;

export const Image = styled.img`
  width: 220px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

export const Title = styled.h3`
  margin-left: 10px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const LevelCard = styled.div`
  color: #bdbdbd;
`;

export const LightCard = styled.div`
  background-color: #dbedea;
  border-radius: 5px;
  padding: 5px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  height: 20px;
`;

export const WaterIcon = styled(animated.img)`
  z-index: 2;
  position: absolute;
  margin-left: 10px;
  margin-top: 10px;
  cursor: pointer;
`;

export const NeedsWaterTitle = styled.h5`
  color: #fff;
`;
