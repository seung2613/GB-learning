import firebase from "firebase/app";
import "firebase/auth";
import { FIREBASE_CONFIG } from "../core/config";

export const logoutUser = () => {

  firebase.auth().signOut();
  console.log("user out")
};

export const signInUser = async ({ name, email, password, product }) => {

  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);

    firebase.auth().currentUser.updateProfile({
      displayName: name,
    });

    let userId = firebase.auth().currentUser.uid;

    firebase.database().ref('users/' + userId).set({
      name: name,
      email: email,
      productType: product
    })

    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        return {
          error: "E-mail already in use."
        };
      case "auth/invalid-email":
        return {
          error: "Invalid e-mail address format."
        };
      case "auth/weak-password":
        return {
          error: "Password is too weak."
        };
      case "auth/too-many-requests":
        return {
          error: "Too many request. Try again in a minute."
        };
      default:
        console.log(error.code, "----error");
        console.log(error.message, "----msg");
        console.log(error, "-----");
        return {
          error: "Check your internet connection."
        };
    }
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "Invalid email address format."
        };
      case "auth/user-not-found":
      case "auth/wrong-password":
        return {
          error: "Invalid email address or password."
        };
      case "auth/too-many-requests":
        return {
          error: "Too many request. Try again in a minute."
        };
      default:
        return {
          error: "Check your internet connection."
        };
    }
  }
};

export const sendEmailWithPassword = async email => {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "Invalid email address format."
        };
      case "auth/user-not-found":
        return {
          error: "User with this email does not exist."
        };
      case "auth/too-many-requests":
        return {
          error: "Too many request. Try again in a minute."
        };
      default:
        console.log("---error.code", error.code);
        return {

          error: "Check your internet connection."
        };
    }
  }
};
