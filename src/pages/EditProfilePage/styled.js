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
  top: -500px;
  width: 100%;
  z-index: -1;
`;

export const EditProfileContainer = styled.div`
  background-color: #fff;
  border-radius: 12px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8em;
`;

export const Header = styled.div`
  background-color: #fababa;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px 12px 0 0;
  width: 100%;
  position: relative;
  min-height: 180px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 12px;
  padding: 20px 20px;
  padding-left: 130px;
  box-shadow: 0 4px 19px 0 rgba(0, 0, 0, 0.05);
  position: absolute;
  min-width: 700px;
  min-height: 120px;
  left: 150px;
  top: 100px;
`;

export const ImageContainerDetails = styled.div``;

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
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
  left: 50px;
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
  color: ${COLORS.neutral_2};
  font-size: 12px;
  outline: none;
`;
