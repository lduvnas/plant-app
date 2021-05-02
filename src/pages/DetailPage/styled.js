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
  /* display: flex;
  align-items: center;
  justify-items: center; */
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

export const CareLabel = styled.div`
  background-color: #bee5b0;
  color: #7cb468;
  border-radius: 5px;
  border: 1px solid #7cb468;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
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
  margin-top: 5em;
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

export const CommentsSection = styled.div`
  /* display: flex;
  justify-content: flex-start;
  align-items: start; */
  width: 700px;
  flex-direction: column;
  margin-bottom: 3em;
`;

export const CommentForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Comment = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2em;
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

export const CommentMessage = styled.div``;
