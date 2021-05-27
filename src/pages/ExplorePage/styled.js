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
  margin-top: 1em;
`;

export const SubTitle = styled.h2`
  color: #737b7d;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.3px;
  font-weight: 400;
  margin-bottom: 2em;
`;

export const PlantListContainer = styled.div`
  display: grid;
  grid-gap: 3em;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 5em;
  margin-top: 2em;
`;

export const Form = styled.form`
  margin-bottom: 2em;
`;

export const FilterCard = styled.div`
  background-color: #dbedea;
  border-radius: 10px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  margin-left: 1em;
  position: relative;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition-duration: 0.5s;
  }
  text-transform: capitalize;
`;

export const SearchFilterTitle = styled.h4`
  text-align: center;
  margin: 0.5em;
`;

export const SearchTermContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ClearIcon = styled.img`
  position: absolute;
  cursor: pointer;
  top: -6px;
  right: -6px;
  height: 15px;
  height: 15px;
`;

export const NoResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: span 3;
  margin-top: 4em;
  text-align: center;
`;

export const SearchIcon = styled.img`
  height: 70px;
`;
