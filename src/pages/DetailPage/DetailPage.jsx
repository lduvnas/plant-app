import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const DetailPage = (props) => {
  const [plant, setPlant] = useState({});
  const { currentUser, addToUserCollection } = useAuth();
  const id = props.match.params.id;

  console.log("user: ", currentUser.uid);
  console.log("plants id: ", id);

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

  function handleOnClick() {
    addToUserCollection(id);
  }

  return (
    <S.Container>
      <h1>{plant.title}</h1>
      <S.Image src={plant.imageURL} />
      <p>{plant.description}</p>
      <p>{plant.temperature}</p>
      <button onClick={handleOnClick}>Add to favorites</button>
      <Link to="/">Go back</Link>
    </S.Container>
  );
};

export default DetailPage;
