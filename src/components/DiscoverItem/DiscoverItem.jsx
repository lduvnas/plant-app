import React from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

const DiscoverItem = ({ title, careLevel, img, id, temperature, light }) => {
  const history = useHistory();

  return (
    <S.Container onClick={() => history.push(`/plants/${id}`)}>
      <S.Image src={img} />
      <h5>{title}</h5>
    </S.Container>
  );
};

export default DiscoverItem;
