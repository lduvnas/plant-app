import React, { useState, useContext } from "react";
import * as S from "./styled";
import { PlantContext } from "../../contexts/PlantContextProvider";
// import PlantItem from "../../components/PlantItem/PlantItem";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import PlantSearchDetail from "../../components/PlantSearchDetail/PlantSearchDetail";

const ExplorePage = () => {
  const { plantListData } = useContext(PlantContext);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <S.Container>
      <Navbar />

      <S.Wrapper>
        <S.Title>Lorem ipsum dolor sit amet eam quas malorum accusam</S.Title>
        <S.SubTitle>
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
          molestiae te.
        </S.SubTitle>
        <Link to="/">Go back</Link>
        <Input
          type="text"
          placeholder="search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        {/* <S.FilterCard>Easy</S.FilterCard>
        <S.FilterCard>Hard</S.FilterCard>
        <S.FilterCard>Medium</S.FilterCard> */}
      </S.Wrapper>
      <S.PlantListContainer>
        {plantListData &&
          plantListData
            .filter((plant) => {
              if (searchTerm === "") {
                return plant;
              } else if (
                plant.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                plant.description
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return plant;
              }
              return null;
            })
            .map((plant) => {
              return (
                <PlantSearchDetail
                  key={plant.id}
                  id={plant.id}
                  title={plant.title}
                  description={plant.description}
                  img={plant.imageURL}
                  temperature={plant.temperature}
                  light={plant.light}
                  careLevel={plant.careLevel}
                />
              );
            })}
      </S.PlantListContainer>
    </S.Container>
  );
};

export default ExplorePage;
