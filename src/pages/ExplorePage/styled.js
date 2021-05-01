import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 50%;
  margin-bottom: 2em;
`;

export const Title = styled.h1`
  font-size: 44px;
  line-height: 56px;
  text-align: center;
  letter-spacing: 0.2px;
  margin-bottom: 0.5em;
`;

export const SubTitle = styled.h2`
  color: #737b7d;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.3px;
  font-weight: 400;
`;

export const PlantListContainer = styled.div`
  display: grid;
  grid-gap: 3em;
  grid-template-columns: repeat(3, 1fr);
  /* justify-content: space-between; */
  /* width: 800px; */
`;

export const FilterCard = styled.div`
  background-color: #dbedea;
  border-radius: 10px;
  padding: 5px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 60px;
  font-size: 10px;
  margin-left: 1em;
  position: relative;
`;

export const SearchTermContainer = styled.div`
  display: flex;
  /* justify-content: center;
  margin-top: 0.5em;
  margin-bottom: 3em; */
`;

export const ClearIcon = styled.img`
  position: absolute;
  top: -6px;
  right: -6px;
  height: 15px;
  height: 15px;
`;
