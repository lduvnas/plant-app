import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

export const ContainerLeft = styled.div`
  width: 55%;
  height: 100%;
  /* display: flex; */
  /* width: 50%; */
  /* align-items: center; */
  /* justify-content: center; */
  /* flex-direction: column; */
  /* position: relative; */
  position: relative;
`;

export const Image = styled.img`
  /* position: absolute;
  height: 148vh;
  top: -200px;
  left: -500px; */
  /* margin-top: -200px;
  margin-left: -450px; */
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  /* width: 50%; */

  z-index: -1;
`;

export const ContainerRight = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* justify-content: flex-end; */
  /* overflow: hidden; */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 450px;
`;

export const WelcomeTitle = styled.img`
  width: 300px;
  margin-bottom: 2em;
`;

export const LinkContainer = styled.div`
  display: flex;
`;
