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
  const { currentUser } = useAuth();
  const { userData } = useContext(PlantContext);
  const [fileUrl, setFileUrl] = useState("");

  const metadata = {
    contentType: "image/jpeg",
  };

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref(`/users/${currentUser.uid}/`);
    const fileRef = storageRef.child("profile.jpg");
    await fileRef.put(file, metadata);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await db.collection("users").doc(currentUser.uid).update({
      userImg: fileUrl,
    });
  };

  console.log(fileUrl);

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
          </S.ImageContainer>
          {/* <S.ContentContainer> */}
          <S.Form onSubmit={onSubmit}>
            {/* <S.Input value={userData.displayName} />
            <S.Input value={currentUser.email} />
            <S.Input value="●●●●●●●●" />
            <S.Input value="●●●●●●●●" /> */}
            <input type="file" onChange={onFileChange} />
            <Button disabled={fileUrl === ""} title="upload to firebase" />
          </S.Form>
          {/* </S.ContentContainer> */}
        </S.ContentWrapper>
      </S.EditProfileContainer>
    </S.Container>
  );
};

export default HomePage;
