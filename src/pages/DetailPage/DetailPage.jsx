import React, { useState, useEffect, useContext } from "react";
import * as S from "./styled";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Navbar from "../../components/Navbar";
import calender from "../../assets/svg/calender.svg";
import sun from "../../assets/svg/sun.svg";
import water from "../../assets/svg/water.svg";
import temperature from "../../assets/svg/temperature.svg";
import { PlantContext } from "../../contexts/PlantContextProvider";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import ReactLoading from "react-loading";
import { useSpring } from "react-spring";

const DetailPage = (props) => {
  const [plant, setPlant] = useState({});
  const { addToUserCollection, removeFromUserCollection } = useAuth();
  const id = props.match.params.id;

  const animationProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 800,
  });

  function fetchPlant() {
    db.collection("plants")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setPlant(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }
  useEffect(() => {
    fetchPlant();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <Navbar />

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
          {/* <S.CareLabel>
            <S.CardTitle>{plant.careLevel}</S.CardTitle>
          </S.CareLabel> */}
          <S.CardGrid>
            <S.FrequencyCard>
              <S.Icon src={calender} alt="calender" />
              <S.CardTitle>Frequency</S.CardTitle>
              <p>{plant.frequency}</p>
            </S.FrequencyCard>
            <S.TemperatureCard>
              <S.Icon src={temperature} alt="temperature" />
              <S.CardTitle>Temp.</S.CardTitle>
              <p>{plant.temperature}</p>
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
          <Link to="/">Go back</Link>
        </S.PlantDetails>
      </S.PlantDetailContainer>
    </S.Container>
  );
};

export default DetailPage;
