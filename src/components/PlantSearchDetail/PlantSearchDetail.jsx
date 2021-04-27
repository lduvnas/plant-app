import React from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";
// import FavoriteButton from "../FavoriteButton/FavoriteButton";
import sunny from "../../assets/svg/sunny.svg";
import partlyCloudy from "../../assets/svg/partlyCloudy.svg";
import cloudy from "../../assets/svg/cloudy.svg";
import { useSpring } from "react-spring";

const PlantSearchDetail = ({
  title,
  careLevel,
  img,
  id,
  temperature,
  light,
}) => {
  const history = useHistory();
  const animationProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 800,
  });

  const getLightIcon = () => {
    if (light === "Low") return <S.Icon src={cloudy} alt="" />;
    if (light === "Medium") return <S.Icon src={partlyCloudy} alt="" />;
    if (light === "High") return <S.Icon src={sunny} alt="" />;
  };

  return (
    <S.Container
      style={animationProps}
      onClick={() => history.push(`/plants/${id}`)}
    >
      {/* <FavoriteButton plantId={id} /> */}
      <S.Image src={img} />

      <S.DetailsContainer>
        <h3>{title}</h3>
        <S.LevelCard>
          <p>Lorum ipsum</p>
        </S.LevelCard>
        <S.LabelContainer>
          <S.LightCard>
            {/* <p>Plant light: {light}</p> */}
            {getLightIcon()}
          </S.LightCard>
          <S.LightCard>
            <p>{temperature}°</p>
          </S.LightCard>
          <S.LightCard>
            <p>{careLevel}</p>
          </S.LightCard>
        </S.LabelContainer>
      </S.DetailsContainer>
      {/* <button onClick={() => history.push(`/plants/${id}`)}>Read more</button> */}
    </S.Container>
  );
};

export default PlantSearchDetail;
