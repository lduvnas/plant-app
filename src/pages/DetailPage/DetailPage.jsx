import React, { useState, useEffect, useContext } from "react";
import * as S from "./styled";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import calender from "../../assets/svg/calender.svg";
import sun from "../../assets/svg/sun.svg";
import water from "../../assets/svg/water.svg";
import temperature from "../../assets/svg/temperature.svg";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import ReactLoading from "react-loading";
import { useSpring } from "react-spring";
import { PlantContext } from "../../contexts/PlantContextProvider";
import { useAuth } from "../../contexts/AuthContext";
import avatar from "../../assets/svg/avatar.svg";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import moment from "moment";
import firebase from "firebase/app";

const DetailPage = (props) => {
  const [plant, setPlant] = useState({});
  const id = props.match.params.id;
  const { userData } = useContext(PlantContext);
  const { currentUser } = useAuth();
  const [commentMsg, setCommentMsg] = useState("");

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
          console.log("running fetchPlant");
          setPlant(doc.data());
        } else {
          console.log("No such document!");
        }
      });
  };

  useEffect(() => {
    fetchPlant();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    // setCommentMsg((prevState) => prevState === "");
    return db
      .collection("plants")
      .doc(id)
      .update({
        comments: firebase.firestore.FieldValue.arrayUnion({
          timestamp: Date(),
          commentMessage: commentMsg,
          userId: currentUser.uid,
          userDisplayName: userData.displayName,
          userAvatar: userData.userImg,
        }),
      })
      .then(() => console.log("comment added"));
  };

  const handleDelete = (index) => {
    return db
      .collection("plants")
      .doc(id)
      .update({
        comments: firebase.firestore.FieldValue.arrayRemove(
          plant.comments[index]
        ),
      });
  };

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
      <S.CommentsSection>
        <h3>Comments</h3>
        <S.CommentForm onSubmit={handleOnSubmit}>
          <Input
            placeholder="Leave a comment"
            value={commentMsg}
            onChange={(event) => {
              setCommentMsg(event.target.value);
            }}
          />
          <Button type="submit" title="Send" />
        </S.CommentForm>

        {plant.comments ? (
          plant.comments.map((comment, index) => {
            return (
              <S.Comment key={index}>
                <S.UserInfo>
                  {comment.userAvatar ? (
                    <S.UserImage src={comment.userAvatar} alt="" />
                  ) : (
                    <S.UserImage src={avatar} alt="avatar" />
                  )}
                  <p>
                    {moment(comment.timestamp).format("MMMM D YYYY, h:mm:ss a")}
                  </p>
                  <span>{comment.userDisplayName}</span>
                </S.UserInfo>
                <S.CommentMessage>
                  <p>{comment.commentMessage}</p>
                </S.CommentMessage>
                {currentUser.uid === comment.userId && (
                  <button onClick={() => handleDelete(index)}>Delete</button>
                )}
              </S.Comment>
            );
          })
        ) : (
          <p>no comments yet</p>
        )}
      </S.CommentsSection>
    </S.Container>
  );
};

export default DetailPage;
