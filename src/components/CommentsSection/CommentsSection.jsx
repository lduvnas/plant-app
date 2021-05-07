import React, { useContext } from "react";
import firebase from "firebase/app";
import { db } from "../../firebase";
import { PlantContext } from "../../contexts/PlantContextProvider";
import { useAuth } from "../../contexts/AuthContext";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Comment from "../Comment/Comment";
import * as S from "./styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import commentSchema from "../../validation/commentSchema";

const CommentsSection = ({ plant, id }) => {
  const { userData } = useContext(PlantContext);
  const { currentUser } = useAuth();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(commentSchema),
  });

  const submitForm = async (data, e) => {
    e.preventDefault();
    e.target.reset();
    console.log(data);
    return db
      .collection("plants")
      .doc(id)
      .update({
        comments: firebase.firestore.FieldValue.arrayUnion({
          timestamp: Date(),
          commentMessage: data.comment,
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
      <S.CommentForm onSubmit={handleSubmit(submitForm)}>
        <Input
          type="text"
          name="comment"
          placeholder="Leave a comment"
          refs={register}
          errors={errors.comment?.message}
          // label="Comment"
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
        <p>No comments yet</p>
      )}
    </S.CommentsSection>
  );
};

export default CommentsSection;
