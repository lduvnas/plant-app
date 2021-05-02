import React, { useState, useContext, useEffect } from "react";
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
  // const previousSearchTerms = [];
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

  // useEffect(() => {
  //   const delayDebounceFn = setTimeout(() => {
  //     setStoredSearchTerms(
  //       JSON.parse(localStorage.getItem("searchTerms")) || []
  //     );
  //     console.log(storedSearchTerms);

  //     if (searchTerm === "" || storedSearchTerms.includes(searchTerm)) {
  //       return null;
  //     } else {
  //       storedSearchTerms.push(searchTerm);
  //     }

  //     localStorage.setItem("searchTerms", JSON.stringify(storedSearchTerms));
  //   }, 3000);

  //   return () => clearTimeout(delayDebounceFn);
  // }, [searchTerm]);

  const deleteSearchTerm = (e, term) => {
    e.stopPropagation();
    let newArr = storedSearchTerms.filter((item) => item !== term);
    setStoredSearchTerms(newArr);
    console.log("inside delete", storedSearchTerms);
    localStorage.setItem("searchTerms", JSON.stringify(storedSearchTerms));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStoredSearchTerms(JSON.parse(localStorage.getItem("searchTerms")));

    if (searchTerm === "" || storedSearchTerms.includes(searchTerm)) {
      return null;
    } else {
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
        <form onSubmit={(e) => handleOnSubmit(e)}>
          <Input
            type="text"
            placeholder="search"
            value={searchTerm}
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
      <S.PlantListContainer>
        {plantListData &&
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
              />
            );
          })}
      </S.PlantListContainer>
    </S.Container>
  );
};

export default ExplorePage;
