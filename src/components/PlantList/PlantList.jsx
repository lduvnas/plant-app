import React from "react";
import DiscoverItem from "../DiscoverItem/DiscoverItem";
import discover from "../../assets/svg/discover.svg";

import * as S from "./styled";
import { useHistory } from "react-router";

const PlantList = ({ plantListData }) => {
  const history = useHistory();
  const newArray = plantListData
    .sort(() => Math.random() - Math.random())
    .slice(0, 5);

  return (
    <S.Container>
      {/* Checks if there is something in plantListData,
       if so iterates over plantlist and put values in PlantItem */}
      <S.Icon src={discover} alt="" onClick={() => history.push(`/explore`)} />
      {plantListData &&
        newArray.map((plant) => {
          return (
            <DiscoverItem
              key={plant.id}
              id={plant.id}
              title={plant.title}
              careLevel={plant.careLevel}
              img={plant.imageURL}
            />
          );
        })}
    </S.Container>
  );
};

export default PlantList;
