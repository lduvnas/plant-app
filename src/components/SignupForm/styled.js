import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: -1;
  transition: ease all 0.3s;
`;

export const ContainerRight = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  padding-right: 15%;
  transition: ease all 0.3s;
  @media (max-width: 1000px) {
    align-items: center;
    padding: 5%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const WelcomeTitle = styled.img`
  max-width: 300px;
  margin-bottom: 2em;
`;

export const LinkContainer = styled.div`
  display: flex;
`;
