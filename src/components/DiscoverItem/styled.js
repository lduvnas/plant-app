import styled from "styled-components";

export const Container = styled.div`
  max-width: 200px;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LevelCard = styled.div`
  color: #bdbdbd;
`;

export const LightCard = styled.div`
  background-color: #dbedea;
  border-radius: 5px;
  padding: 5px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  height: 20px;
`;
