import styled from "styled-components";
import { COLORS } from "../../constants";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const EditProfileContainer = styled.div`
  background-color: #fff;
  border-radius: 12px;
  width: 60%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;

  flex-direction: column;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  left: -500px;
  top: -150px;
  background-color: #f7f7f7;
`;

export const RemoveIcon = styled.img`
  height: 40px;
  width: 40px;
  position: absolute;
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
