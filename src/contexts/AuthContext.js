import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import firebase from "firebase/app";
import moment from "moment";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

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

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const sendResetPassword = (email) => {
    auth
      .sendPasswordResetEmail(email)
      .then(function () {
        console.log("email sent");
      })
      .catch(function (error) {
        console.log(error);
      });
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
      })
      .then(
        db
          .collection("plants")
          .doc(plantId)
          .update({
            isInFavorites: true,
            nextWateringDate: moment(Date()).format("MMMM DD, YYYY"),
          })
      );
  };

  const removeFromUserCollection = (plantId) => {
    console.log("running removeFromUserCollection");
    return db
      .collection("users")
      .doc(currentUser.uid)
      .update({
        favorites: firebase.firestore.FieldValue.arrayRemove(plantId),
      })
      .then(
        db.collection("plants").doc(plantId).update({
          isInFavorites: false,
        })
      );
  };

  const value = {
    currentUser,
    signupWithEmail,
    login,
    sendResetPassword,
    logout,
    addToUserCollection,
    removeFromUserCollection,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
