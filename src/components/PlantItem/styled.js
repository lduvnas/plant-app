import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled(animated.div)`
  max-width: 200px;
`;

export const Image = styled.img`
  width: 220px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

// export const WaterAlert = styled(animated.div)`
//   border-radius: 7px;
//   padding: 5px 10px;
//   display: flex;
//   flex-direction: row;
//   margin-left: 10px;
//   margin-top: 10px;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   cursor: pointer;
// `;

export const WaterIcon = styled(animated.img)`
  z-index: 2;
  position: absolute;
  margin-left: 10px;
  margin-top: 10px;
  cursor: pointer;
`;

export const NeedsWaterTitle = styled.h5`
  color: #fff;
  /* position: absolute; */
`;
