import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (max-width: 1000px) {
    align-items: flex-start;
    background-color: #fababa;
  }
`;

export const BackgroundContainer = styled.div`
  height: 300px;
  width: 400px;
  z-index: 0;

  position: fixed;
  bottom: 0;
  left: 0;
  @media (max-width: 1000px) {
    background-color: #f7f7f7;
  }
`;

export const ContainerLeft = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  padding-left: 150px;
  /* background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 8px 8px #00000003; */
  transition: ease all 0.5s;
  z-index: 1;
  @media (max-width: 1000px) {
    padding: 5%;
    align-items: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
`;

export const ContainerRight = styled.div`
  position: relative;
`;

export const Image = styled.img`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  transition: ease all 0.2s;
  @media (max-width: 1500px) {
    right: -220px;
  }
  @media (max-width: 1000px) {
    left: -160px;
    top: 100px;
  }
`;

export const WelcomeTitle = styled.img`
  max-width: 300px;
  margin-bottom: 2em;
`;

export const Modal = styled.div`
  ${({ visible }) => !visible && `display: none;`}
  background-color: #fff;
  height: 400px;
  width: 500px;
  border-radius: 10px;
  position: absolute;
  padding: 30px 40px;
`;

export const Close = styled.img`
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const SignupLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
