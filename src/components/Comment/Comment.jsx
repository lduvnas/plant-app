import { useSpring } from "@react-spring/core";
import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";
import firebase from "firebase/app";
import close from "../../assets/svg/close.svg";
import avatar from "../../assets/svg/avatar.svg";
import * as S from "./styled";
import moment from "moment";

const Comment = ({
  index,
  plantId,
  plant,
  userId,
  userAvatar,
  displayName,
  message,
  timestamp,
}) => {
  const { currentUser } = useAuth();
  const yesterday = moment(Date.now())
    .clone()
    .subtract(1, "days")
    .startOf("day");

  const animationProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 800,
  });

  const handleDelete = (index) => {
    console.log(index);
    return db
      .collection("plants")
      .doc(plantId)
      .update({
        comments: firebase.firestore.FieldValue.arrayRemove(
          plant.comments[index]
        ),
      });
  };

  return (
    <S.Comment key={index} style={animationProps}>
      {currentUser.uid === userId && (
        <S.DeleteIcon
          onClick={() => handleDelete(index)}
          src={close}
          alt="trash"
        />
      )}
      <S.UserInfo>
        {userAvatar ? (
          <S.UserImage src={userAvatar} alt="" />
        ) : (
          <S.UserImage src={avatar} alt="avatar" />
        )}
      </S.UserInfo>
      <S.CommentMessage>
        <h4>{displayName}</h4>
        <p>{message}</p>
      </S.CommentMessage>
      <S.Wrapper>
        <S.CommentTime>
          {moment(timestamp).isAfter(yesterday)
            ? moment(timestamp).fromNow()
            : moment(timestamp).format("MMMM D YYYY, HH:mm")}
        </S.CommentTime>
      </S.Wrapper>
    </S.Comment>
  );
};

export default Comment;
