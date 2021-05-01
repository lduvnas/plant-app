import React, { useState, useContext } from "react";
import * as S from "./styled";
import { PlantContext } from "../../contexts/PlantContextProvider";
// import PlantItem from "../../components/PlantItem/PlantItem";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import PlantSearchDetail from "../../components/PlantSearchDetail/PlantSearchDetail";
import close from "../../assets/svg/close.svg";

const ExplorePage = () => {
  const { plantListData } = useContext(PlantContext);
  const [searchTerm, setSearchTerm] = useState("");

  // const filterCareLevels = (plant, selectedLevel) => {
  //   // if (plant.careLevel === selectedLevel) {
  //   return plant.careLevel === selectedLevel;
  //   // }
  // };

  // const a = "Easy";
  // const filtered = plantListData.filter(filterCareLevels(a));

  // console.log(filtered);

  const searchTerms = ["cactus", "ficus"];
  localStorage.setItem("searchTerms", JSON.stringify(searchTerms));

  //...

  searchTerms.push(searchTerm);

  const storedSearchTerms = JSON.parse(localStorage.getItem("searchTerms"));

  console.log(storedSearchTerms);

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
        <form>
          <Input
            type="text"
            placeholder="search"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </form>

        <h4>Categories</h4>
        <S.SearchTermContainer>
          <S.FilterCard onClick={() => setSearchTerm("Easy")}>
            Easy
          </S.FilterCard>
          <S.FilterCard onClick={() => setSearchTerm("High")}>
            Hard
          </S.FilterCard>
          <S.FilterCard onClick={() => setSearchTerm("Medium")}>
            Medium
          </S.FilterCard>
        </S.SearchTermContainer>
        <h4>Recent history</h4>
        <S.SearchTermContainer>
          {storedSearchTerms &&
            storedSearchTerms.map((searchTerm) => {
              return (
                <S.FilterCard onClick={() => setSearchTerm(searchTerm)}>
                  <S.ClearIcon src={close} />
                  {searchTerm}
                </S.FilterCard>
              );
            })}
        </S.SearchTermContainer>
      </S.Wrapper>
      <S.PlantListContainer>
        {plantListData &&
          plantListData
            .filter((plant) => {
              if (searchTerm === "") {
                return plant;
              } else if (
                plant.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                plant.careLevel.toLowerCase().includes(searchTerm.toLowerCase())
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
