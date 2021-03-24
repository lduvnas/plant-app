import React, { useState, useContext } from "react";
import * as S from "./styled";
import { PlantContext } from "../../contexts/PlantContextProvider";
import PlantItem from "../../components/PlantItem/PlantItem";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const ExplorePage = () => {
  const { plantListData } = useContext(PlantContext);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <S.Container>
      <Navbar />

      <S.Wrapper>
        <h1>ExplorePage</h1>
        <Link to="/">Go back</Link>
        <Input
          type="text"
          placeholder="search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <S.PlantListContainer>
          {plantListData &&
            plantListData
              .filter((plant) => {
                if (searchTerm === "") {
                  return plant;
                } else if (
                  plant.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  plant.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return plant;
                }
              })
              .map((plant) => {
                return (
                  <PlantItem
                    key={plant.id}
                    id={plant.id}
                    title={plant.title}
                    description={plant.description}
                    img={plant.imageURL}
                    temperature={plant.temperature}
                  />
                );
              })}
        </S.PlantListContainer>
      </S.Wrapper>
    </S.Container>
  );
};

export default ExplorePage;
