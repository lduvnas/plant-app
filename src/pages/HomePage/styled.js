import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  /* height: 100vh; */
`;

export const Wave1 = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.8;
  width: 20vw;
`;

export const Wave2 = styled.img`
  position: fixed;
  right: 0;
  bottom: -3%;
  z-index: -1;
  opacity: 0.8;
  width: 15vw;
`;

export const Title = styled.h2`
  margin-top: 3em;
  margin-bottom: 0.5em;
`;
