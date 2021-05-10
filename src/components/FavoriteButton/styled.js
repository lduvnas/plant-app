import styled from "styled-components";

export const HeartButton = styled.button`
  position: absolute;
  text-decoration: none;
  background-color: transparent;
  border: none;
  margin: 15px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
    transition-duration: 0.5s;
  }
`;

export const HeartIcon = styled.img`
  height: 60px;
  width: 60px;
`;
