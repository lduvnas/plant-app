import React from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";
import sunny from "../../assets/svg/sunny.svg";
import partlyCloudy from "../../assets/svg/partlyCloudy.svg";
import warningWater from "../../assets/svg/warningWater.svg";
import cloudy from "../../assets/svg/cloudy.svg";
import { useSpring } from "react-spring";
import { db } from "../../firebase";
import moment from "moment";

const PlantItem = ({
  title,
  careLevel,
  img,
  id,
  light,
  nextWateringDate,
  wateringInterval,
}) => {
  const history = useHistory();
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500,
  });

  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, height: 24, width: 24 },
      { opacity: 0.3, height: 22, width: 22 },
    ],
    from: { opacity: 0.3, height: 22, width: 22 },
  });

  const getLightIcon = () => {
    if (light === "Low") return <S.Icon src={cloudy} alt="" />;
    if (light === "Medium") return <S.Icon src={partlyCloudy} alt="" />;
    if (light === "High") return <S.Icon src={sunny} alt="" />;
  };

  const today = moment(Date()).format("MMMM DD, YYYY");

  const hasPastWateringDate =
    moment(today).isAfter(nextWateringDate) ||
    moment(today).isSame(nextWateringDate);

  const newWateringDate = moment(today)
    .clone()
    .add(wateringInterval, "days")
    .format("MMMM DD, YYYY");

  const handleWatering = (id, e) => {
    e.stopPropagation();
    console.log("watering");
    db.collection("plants").doc(id).update({
      nextWateringDate: newWateringDate,
    });

    console.log(
      "lastwatering: ",
      nextWateringDate,
      "Todays date: ",
      today,
      "has pastWatering Date: ",
      hasPastWateringDate,
      "new date for watering: ",
      newWateringDate
    );
  };

  return (
    <S.Container style={props} onClick={() => history.push(`/plants/${id}`)}>
      {hasPastWateringDate && (
        <>
          <S.NeedsWaterTitle>Time to water</S.NeedsWaterTitle>
          <S.WaterIcon
            onClick={(e) => handleWatering(id, e)}
            style={styles}
            src={warningWater}
            alt="water"
          />
        </>
      )}
      <S.Image src={img} />
      <h3>{title}</h3>
      <S.DetailsContainer>
        <S.LevelCard>
          <p>Level: {careLevel}</p>
        </S.LevelCard>
        <S.LightCard>{getLightIcon()}</S.LightCard>
      </S.DetailsContainer>
      <p>Next watering: {nextWateringDate}</p>
      <p>plant intervals: {wateringInterval}</p>
    </S.Container>
  );
};

export default PlantItem;
