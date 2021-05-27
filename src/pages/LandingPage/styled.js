import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const WelcomeContainer = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
`;

export const Welcome = styled.img`
  margin-bottom: 1em;
`;

export const Description = styled.p`
  max-width: 270px;
  margin-bottom: 1em;
`;

export const Image = styled.img`
  width: 58%;
  margin-right: -20%;
  margin-bottom: -1%;
`;
