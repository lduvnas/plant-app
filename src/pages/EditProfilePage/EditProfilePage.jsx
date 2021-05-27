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
  const [fileUrl, setFileUrl] = useState(userData.userImg);
  const [displayName, setDisplayName] = useState("");

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
      displayName: displayName,
    });
  };

  const handleDelete = () => {
    db.collection("users").doc(currentUser.uid).update({
      userImg: null,
    });
  };

  return (
    <S.Container>
      <Navbar />
      <S.EditProfileContainer>
        <S.Header>
          <S.ImageContainer>
            {userData.userImg ? (
              <S.Image src={userData.userImg} alt="" />
            ) : (
              <S.Image src={avatar} alt="avatar" />
            )}
            <S.RemoveIcon onClick={handleDelete} src={close} alt="closeicon" />
            <S.ImageContainerDetails>
              <h1>{userData.displayName}</h1>
              <p>{currentUser.email}</p>
            </S.ImageContainerDetails>
          </S.ImageContainer>
        </S.Header>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
          <path
            fill="#FABABA"
            fill-opacity="1"
            d="M0,32L80,37.3C160,43,320,53,480,74.7C640,96,800,128,960,122.7C1120,117,1280,75,1360,53.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
        <S.Form onSubmit={onSubmit}>
          <h2>Edit Profile</h2>
          <S.Input
            defaultValue={userData.displayName}
            onChange={(event) => {
              setDisplayName(event.target.value);
            }}
          />
          <S.Input value={currentUser.email} />
          <S.Input value="●●●●●●●●" />
          <S.Input value="●●●●●●●●" />
          <input type="file" onChange={onFileChange} />
          <Button disabled={fileUrl === ""} title="upload to firebase" />
        </S.Form>
      </S.EditProfileContainer>
    </S.Container>
  );
};

export default HomePage;
