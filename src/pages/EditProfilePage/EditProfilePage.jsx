import React, { useContext, useState } from "react";
import * as S from "./styled";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../contexts/AuthContext";
import { db, storage } from "../../firebase";
import avatar from "../../assets/svg/avatar.svg";
import { PlantContext } from "../../contexts/PlantContextProvider";

const HomePage = () => {
  const { currentUser, userProfileImgURL, setUserProfileImgURL } = useAuth();
  const { userData } = useContext(PlantContext);

  const [file, setFile] = useState(null);

  console.log("url: ", userProfileImgURL);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    uploadImage();
    db.collection("users")
      .doc(currentUser.uid)
      .update({
        userImg: userProfileImgURL,
      })
      .then(() => {
        console.log("User Updated!");
      });
  };

  const uploadImage = () => {
    const uploadTask = storage
      .ref(`/users/${currentUser.uid}/profile.jpg`)
      .put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("users")
        .child(currentUser.uid)
        .child("profile.jpg")
        .getDownloadURL()
        .then((url) => {
          console.log("image successfully uploaded");
          setFile(null);
          setUserProfileImgURL(url);
        });
    });
  };

  const handleDelete = () => {
    db.collection("users")
      .doc(currentUser.uid)
      .update({
        userImg: null,
      })
      .then(() => {
        console.log("User image deleted");
      });
  };

  return (
    <S.Container>
      <Navbar />
      <div>
        <h2>Edit Profile</h2>
        {currentUser.email}
        {currentUser.displayName}
        {currentUser.photoURL}
        <S.Form onSubmit={handleUpdate}>
          <input type="file" onChange={handleChange} />
          <button disabled={!file}>upload to firebase</button>
        </S.Form>
        {userData.userImg ? (
          <S.Image src={userData.userImg} alt="" />
        ) : (
          <S.Image src={avatar} alt="avatar" />
        )}
        <button onClick={handleDelete}>Remove image</button>
      </div>
    </S.Container>
  );
};

export default HomePage;
