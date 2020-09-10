import firebase from "../firebase";
import "firebase/auth";

function signByProvider(provider, err) {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function () {
      const currentUser = firebase.auth().currentUser;
      if (!currentUser.photoURL) {
        currentUser
          .updateProfile({
            photoURL: "https://api.adorable.io/avatars/150/abott@adorable.png",
          })
          .catch(err);
        return;
      }
    })
    .catch(err);
}

export function handleSignByGoogle(err) {
  const provider = new firebase.auth.GoogleAuthProvider();
  signByProvider(provider, err);
}
export function handleSignByGithub(err) {
  const provider = new firebase.auth.GithubAuthProvider();
  signByProvider(provider, err);
}
export function handleSignByFacebook(err) {
  const provider = new firebase.auth.FacebookAuthProvider();
  signByProvider(provider, err);
}
export function handleSignByTwitter(err) {
  const provider = new firebase.auth.TwitterAuthProvider();
  signByProvider(provider, err);
}


export function handleRegisterByEmail({ email, password, name }, err) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      const currentUser = firebase.auth().currentUser;
      currentUser
        .updateProfile({
          displayName: name,
          photoURL: "https://api.adorable.io/avatars/200/abott@adorable.png",
        })
        .then(() => window.location.reload())
        .catch(err);
    })
    .catch(err);
}

export function handleLoginByEmail({ email, password }, err) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      const currentUser = firebase.auth().currentUser;
      if (!currentUser.photoURL) {
        currentUser
          .updateProfile({
            photoURL: "https://api.adorable.io/avatars/200/abott@adorable.png",
          })
          .catch(err);
        return;
      }
    })
    .catch(err);
}

export function logOut() {
  firebase.auth().signOut();
}
