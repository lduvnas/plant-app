import React, { useContext, useState } from "react";
import * as S from "./styled";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../contexts/AuthContext";
import { db, storage } from "../../firebase";
import avatar from "../../assets/svg/avatar.svg";
import { PlantContext } from "../../contexts/PlantContextProvider";
import close from "../../assets/svg/close.svg";
import Button from "../../components/Button/Button";

const HomePage = () => {
  const { currentUser, userProfileImgURL, setUserProfileImgURL } = useAuth();
  const { userData } = useContext(PlantContext);

  const [file, setFile] = useState(null);
  const metadata = {
    contentType: "image/jpeg",
  };

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
      .put(file, metadata);
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
      <S.EditProfileContainer>
        <h2>Edit Profile</h2>
        <h3>{userData.displayName}</h3>
        <p>{currentUser.email}</p>

        <S.ContentWrapper>
          <S.ImageContainer>
            {userData.userImg ? (
              <S.Image src={userData.userImg} alt="" />
            ) : (
              <S.Image src={avatar} alt="avatar" />
            )}
            <S.RemoveIcon onClick={handleDelete} src={close} alt="closeicon" />
            {/* <Button title="Remove image" onClick={handleDelete} /> */}
          </S.ImageContainer>
          {/* <S.ContentContainer> */}
          <S.Form onSubmit={handleUpdate}>
            {/* <S.Input value={userData.displayName} />
            <S.Input value={currentUser.email} />
            <S.Input value="●●●●●●●●" />
            <S.Input value="●●●●●●●●" /> */}
            <input type="file" onChange={handleChange} />
            <Button disabled={!file} title="upload to firebase" />
          </S.Form>
          {/* </S.ContentContainer> */}
        </S.ContentWrapper>
      </S.EditProfileContainer>
    </S.Container>
  );
};

export default HomePage;
