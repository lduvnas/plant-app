import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { db } from "../../firebase";
import Navbar from "../../components/Navbar";
import calender from "../../assets/svg/calender.svg";
import sun from "../../assets/svg/sun.svg";
import water from "../../assets/svg/water.svg";
import temperature from "../../assets/svg/temperature.svg";
import wave3 from "../../assets/svg/wave3.svg";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import ReactLoading from "react-loading";
import { useSpring } from "react-spring";
import CommentsSection from "../../components/CommentsSection/CommentsSection";
import GoBackLink from "../../components/GoBackLink/GoBackLink";

const DetailPage = (props) => {
  const [plant, setPlant] = useState({});
  const id = props.match.params.id;

  const animationProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 800,
  });

  const fetchPlant = () => {
    db.collection("plants")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setPlant(doc.data());
        }
      });
  };

  useEffect(() => {
    fetchPlant();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <Navbar />
      <S.Wrapper>
        <GoBackLink />
        <S.PlantDetailContainer style={animationProps}>
          <FavoriteButton plantId={id} />
          {plant.imageURL ? (
            <S.Image src={plant.imageURL} />
          ) : (
            <ReactLoading
              type="bubbles"
              color="#455b57"
              height={50}
              width={100}
            />
          )}

          <S.PlantDetails>
            <S.PlantTitle>{plant.title}</S.PlantTitle>
            <S.CardGrid>
              <S.FrequencyCard>
                <S.Icon src={calender} alt="calender" />
                <S.CardTitle>Frequency</S.CardTitle>
                <p>{plant.frequency}</p>
              </S.FrequencyCard>
              <S.TemperatureCard>
                <S.Icon src={temperature} alt="temperature" />
                <S.CardTitle>Temp.</S.CardTitle>
                <p>{plant.temperature}°</p>
              </S.TemperatureCard>
              <S.LightCard>
                <S.Icon src={sun} alt="sun" />
                <S.CardTitle>Light</S.CardTitle>
                <p>{plant.light}</p>
              </S.LightCard>
              <S.WaterCard>
                <S.Icon src={water} alt="water" />
                <S.CardTitle>Water</S.CardTitle>
                <p>{plant.water}</p>
              </S.WaterCard>
            </S.CardGrid>
            <p>{plant.description}</p>
            <S.CareTitle>Care tips</S.CareTitle>
            <p>{plant.care}</p>
          </S.PlantDetails>
        </S.PlantDetailContainer>
      </S.Wrapper>

      <S.CommentsSectionWrapper style={animationProps}>
        <S.Wave src={wave3} alt="wave3" />
        <CommentsSection plant={plant} id={id} />
      </S.CommentsSectionWrapper>
    </S.Container>
  );
};

export default DetailPage;
