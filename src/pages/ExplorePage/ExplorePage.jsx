import React, { useState, useContext } from "react";
import * as S from "./styled";
import { PlantContext } from "../../contexts/PlantContextProvider";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import PlantSearchDetail from "../../components/PlantSearchDetail/PlantSearchDetail";
import close from "../../assets/svg/close.svg";

const ExplorePage = () => {
  const { plantListData } = useContext(PlantContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [storedSearchTerms, setStoredSearchTerms] = useState(
    JSON.parse(localStorage.getItem("searchTerms"))
  );

  const filtredPlants = plantListData.filter((plant) => {
    if (searchTerm === "") {
      return plant;
    } else if (
      plant.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.careLevel.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return plant;
    }
    return null;
  });

  const deleteSearchTerm = (e, term) => {
    e.stopPropagation();
    let newArr = storedSearchTerms.filter((item) => item !== term);
    setStoredSearchTerms(newArr);
    localStorage.setItem("searchTerms", JSON.stringify(newArr));
  };

  const storeInLocalStorage = () => {
    if (searchTerm === "" || storedSearchTerms.includes(searchTerm)) {
      return null;
    } else {
      if (storedSearchTerms.length >= 10) {
        storedSearchTerms.shift();
      }
      storedSearchTerms.push(searchTerm);
    }

    localStorage.setItem("searchTerms", JSON.stringify(storedSearchTerms));
  };

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
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </form>
        <S.SearchFilterTitle>Categories</S.SearchFilterTitle>
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
        <S.SearchFilterTitle>Recent history</S.SearchFilterTitle>
        <S.SearchTermContainer>
          {storedSearchTerms
            ? storedSearchTerms.map((term) => {
                return (
                  <S.FilterCard onClick={() => setSearchTerm(term)}>
                    <S.ClearIcon
                      src={close}
                      onClick={(e) => deleteSearchTerm(e, term)}
                    />
                    {term}
                  </S.FilterCard>
                );
              })
            : null}
        </S.SearchTermContainer>
      </S.Wrapper>
      {searchTerm !== "" && <p>Search results for "{searchTerm}"</p>}
      <S.PlantListContainer>
        {filtredPlants.length !== 0 ? (
          filtredPlants.map((plant) => {
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
                storeInLocalStorage={storeInLocalStorage}
                searchTerm={searchTerm}
              />
            );
          })
        ) : (
          <p>no results</p>
        )}
      </S.PlantListContainer>
    </S.Container>
  );
};

export default ExplorePage;
