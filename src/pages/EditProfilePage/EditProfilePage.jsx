import React, { useState } from "react";
import * as S from "./styled";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../../components/Button";
import Input from "../../components/Input";

const HomePage = () => {
  const { currentUser, logout } = useAuth();
  // const [user, setUser] = useState("");
  // const [selectedFile, setSelectedFile] = useState(null);
  // const allInputs = { imgUrl: "" };
  // const [imageAsFile, setImageAsFile] = useState("");
  // const [imageAsUrl, setImageAsUrl] = useState(allInputs);

  const [displayName, setDisplayName] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);

  // const handleImageAsFile = (e) => {
  //   const image = e.target.files[0];
  //   setImageAsFile((imageFile) => image);
  // };

  function addUserDisplayName() {
    currentUser
      .updateProfile({
        displayName: displayName,
        photoURL: photoURL,
      })
      .then(function () {
        console.log("succsess");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  console.log("DISPLAY NAME STATE:", displayName);
  console.log("PHOTO URL STATE", photoURL);

  return (
    <S.Container>
      <Navbar />
      <div>
        <h2>Edit Profile</h2>
        {currentUser.email}
        {currentUser.displayName}
        {currentUser.photoURL}
        <S.Form>
          {/* <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          /> */}

          {/* <input
            type="file"
            // value={selectedFile}
            // onChange={(e) => setSelectedFile(e.target.files[0])}
            onChange={handleImageAsFile}
          /> */}

          <Input
            type="text"
            placeholder="Display name"
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
          <Input
            type="file"
            placeholder="choose file"
            onChange={(e) => setPhotoURL(e.target.value)}
            // required
          />
        </S.Form>
      </div>
      <Button title="Add user display name" onClick={addUserDisplayName} />
    </S.Container>
  );
};

export default HomePage;
