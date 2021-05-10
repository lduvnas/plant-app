import styled from "styled-components";
import { COLORS } from "../../constants";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

export const Wave = styled.img`
  position: fixed;
  top: -400px;
  width: 100%;
  z-index: -1;
`;

export const EditProfileContainer = styled.div`
  background-color: #fff;
  border-radius: 12px;
  width: 60%;
  /* padding: 30px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8em;
  height: 500px;
  /* z-index: -2; */
`;

export const Header = styled.div`
  /* background-color: #fababa; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px 12px 0 0;
  width: 100%;
  position: relative;
  padding-top: 3em;
  padding-right: 20em;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: -100px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px;
  align-items: flex-end;
`;

export const Form = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 50%;
  padding: 10px;
  background-color: #f7f7f7;
`;

export const RemoveIcon = styled.img`
  height: 40px;
  width: 40px;
  cursor: pointer;
  left: -365px;
  top: 120px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 20px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  background-color: #f5f5f5;
  border-radius: 8px;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  color: ${COLORS.neutral_2};
  font-size: 12px;
  outline: none;
`;
