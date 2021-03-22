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

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password).then((cred) => {
      //creates user collection with the users uniq id
      return db.collection("users").doc(cred.user.uid).set({
        favorites: [],
      });
    });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  function addToUserCollection(plantId) {
    return db
      .collection("users")
      .doc(currentUser.uid)
      .update({
        favorites: firebase.firestore.FieldValue.arrayUnion(plantId),
      });
  }

  function removeFromUserCollection(plantId) {
    return db
      .collection("users")
      .doc(currentUser.uid)
      .update({
        favorites: firebase.firestore.FieldValue.arrayRemove(plantId),
      });
  }

  const value = {
    currentUser,
    signup,
    login,
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
