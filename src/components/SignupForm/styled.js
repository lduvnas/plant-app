import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  align-items: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
  /* display: inline; */
`;

export const ContainerLeft = styled.div`
  /* width: 55%;
  height: 100%; */
  /* display: flex; */
  /* width: 50%; */
  /* align-items: center; */
  /* justify-content: center; */
  /* flex-direction: column; */
  /* position: relative; */
  /* position: relative; */
`;

export const Image = styled.img`
  /* position: absolute;
  height: 148vh;
  top: -200px;
  left: -500px; */
  /* margin-top: -200px;
  margin-left: -450px; */
  /* position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh; */
  /* width: 50%; */
  position: absolute;
  left: 0;
  top: 0;
  width: 100vh;
  z-index: -1;
  transition: ease all 0.3s;
  @media (max-width: 1600px) {
    left: -100px;
  }
  @media (max-width: 1500px) {
    left: -200px;
  }
  @media (max-width: 1400px) {
    left: -300px;
  }
  @media (max-width: 1300px) {
    left: -400px;
  }
  @media (max-width: 1200px) {
    left: -500px;
  }
  @media (max-width: 1100px) {
    left: -600px;
  }
  @media (max-width: 1000px) {
    left: -700px;
  }
  @media (max-width: 900px) {
    left: -800px;
  }
  @media (max-width: 800px) {
    left: -900px;
  }
  @media (max-width: 700px) {
    left: -1000px;
  }
`;

export const ContainerRight = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  /* justify-content: center; */
  flex-direction: column;
  justify-content: center;
  /* justify-content: flex-end; */
  /* overflow: hidden; */
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
  @media (max-width: 1200px) {
    /* background-color: #fff;
    padding: 30px;
    border-radius: 10px; */
  }
`;

export const WelcomeTitle = styled.img`
  max-width: 300px;
  margin-bottom: 2em;
`;

export const LinkContainer = styled.div`
  display: flex;
`;
