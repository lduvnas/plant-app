import styled, { css } from "styled-components";
import { animated } from "react-spring";

export const CardStyle = css`
  background-color: #f1f2f4;
  border-radius: 10px;
  padding: 15px 40px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 2fr;
`;

export const PlantTitle = styled.h1`
  margin-bottom: 1em;
`;

export const CardTitle = styled.h3`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
`;

export const PlantDetailContainer = styled(animated.div)`
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3em;
  margin-bottom: 3em;
`;

export const PlantDetails = styled.div`
  width: 45%;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.7em;
  margin-bottom: 2em;
`;

export const FrequencyCard = styled.div`
  ${CardStyle}
`;

export const WaterCard = styled.div`
  ${CardStyle}
`;

export const TemperatureCard = styled.div`
  ${CardStyle}
`;

export const LightCard = styled.div`
  ${CardStyle}
`;

export const Icon = styled.img`
  grid-row-start: span 2;
`;

export const CareTitle = styled.h3`
  margin-top: 2em;
  margin-bottom: 1em;
`;

export const CommentsSectionWrapper = styled(animated.div)`
  background-color: #fababa;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

export const Wave = styled.img`
  width: 120vw;
  background: #f7f7f7;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 1000px;
`;
