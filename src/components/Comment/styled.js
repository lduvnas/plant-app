import { animated } from "@react-spring/web";
import styled from "styled-components";

export const Container = styled.div``;

export const Comment = styled(animated.div)`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 1.5em;
  position: relative;
`;

export const CommentTime = styled.p`
  font-size: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2em;
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

export const CommentMessage = styled.div`
  width: 60%;
  margin-right: 1em;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const DeleteIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  top: -10px;
  left: 490px;
`;
