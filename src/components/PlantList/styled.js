import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: scroll;
  width: 1000px;
  margin-bottom: 2em;
`;

export const Icon = styled.img`
  height: 70px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
    transition-duration: 0.5s;
  }
`;
