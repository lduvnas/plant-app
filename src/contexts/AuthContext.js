import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import firebase from "firebase/app";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [userProfileImgURL, setUserProfileImgURL] = useState("");

  // const provider = new firebase.auth.GoogleAuthProvider();

  const signupWithEmail = (email, password, displayName) => {
    return auth.createUserWithEmailAndPassword(email, password).then((cred) => {
      //creates user collection with the users uniq id
      return db.collection("users").doc(cred.user.uid).set({
        favorites: [],
        displayName: displayName,
        email: email,
        userImg: "",
      });
    });
  };

  // const signupWithGoogle = () => {
  //   return auth.signInWithPopup(provider).then((cred) => {
  //     //creates user collection with the users uniq id
  //     return db.collection("users").doc(cred.user.uid).set({
  //       favorites: [],
  //     });
  //   });
  // }

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      console.log("running onAuthStateChanged");
    });

    return unsubscribe;
  }, []);

  const addToUserCollection = (plantId) => {
    console.log("running addToUserCollection");
    return db
      .collection("users")
      .doc(currentUser.uid)
      .update({
        favorites: firebase.firestore.FieldValue.arrayUnion(plantId),
      });
  };

  const removeFromUserCollection = (plantId) => {
    console.log("running removeFromUserCollection");
    return db
      .collection("users")
      .doc(currentUser.uid)
      .update({
        favorites: firebase.firestore.FieldValue.arrayRemove(plantId),
      });
  };

  const value = {
    currentUser,
    signupWithEmail,
    // signupWithGoogle,
    login,
    logout,
    addToUserCollection,
    removeFromUserCollection,
    userProfileImgURL,
    setUserProfileImgURL,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
