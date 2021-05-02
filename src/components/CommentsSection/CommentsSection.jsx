import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import { db } from "../../firebase";
import { PlantContext } from "../../contexts/PlantContextProvider";
import { useAuth } from "../../contexts/AuthContext";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Comment from "../Comment/Comment";
import * as S from "./styled";

const CommentsSection = ({ plant, id }) => {
  const { userData } = useContext(PlantContext);
  const { currentUser } = useAuth();
  const [commentMsg, setCommentMsg] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
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

  return (
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
            <Comment
              index={index}
              plantId={id}
              plant={plant}
              userId={comment.userId}
              userAvatar={comment.userAvatar}
              displayName={comment.userDisplayName}
              message={comment.commentMessage}
              timestamp={comment.timestamp}
            />
          );
        })
      ) : (
        <p>no comments yet</p>
      )}
    </S.CommentsSection>
  );
};

export default CommentsSection;
