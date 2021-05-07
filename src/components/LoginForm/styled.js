import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ContainerLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: #f7f7f7; */
  /* border-bottom-right-radius: 50px;
  border-top-right-radius: 50px; */
  /* z-index: 2; */
`;

export const ContainerRight = styled.div`
  /* width: 60%; */
  height: 100%;
  /* background-color: #8c9896; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;
  /* z-index: 1; */
  /* border-bottom-left-radius: 20px; */
  /* border-top-left-radius: 20px; */
  /* position: relative; */
  /* left: -45px;
  margin-right: -45px; */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* max-width: 400px; */
  width: 450px;
  /* background-color: #fff;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0 0 8px 8px #00000003; */
`;

export const Image = styled.img`
  height: 102vh;
  position: fixed;
  top: 0;
  right: 0;
`;

export const WelcomeTitle = styled.img`
  width: 300px;
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
