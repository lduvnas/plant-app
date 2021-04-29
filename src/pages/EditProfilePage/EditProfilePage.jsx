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

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    // let imgUrl = await uploadImage();
    uploadImage();
    // if (imgUrl == null && userData.userImg) {
    //   imgUrl = userData.userImg;
    // }
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

// const [userData, setUserData] = useState(null);

// const getUserData = async () => {
//   db.collection("users")
//     .doc(currentUser.uid)
//     .onSnapshot((doc) => {
//       console.log("fetching userData");
//       if (doc.exists) {
//         setUserProfileImgURL(doc.data().userImg);
//         console.log(doc.data().userImg);
//       }
//     });
// };

// const handleUpdate = () => {

// }

// useEffect(() => {
//   getUserData();
// }, []);
