import firebase from "../firebase";

export function updateProfile({ name, email }, currentUser, result, err) {
    if (!name.length || !email.length) {
        err({ message: "Invalid input"});
        return;
    }
    if (name === currentUser.name && email === currentUser.email) {
        result({ message: "Profile successfully updated"});
        return;
    }
    firebase
        .auth()
        .currentUser.updateProfile({
            displayName: name,
            email
        })
        .then(function() {
            const { displayName: name, email } = firebase.auth().currentUser;
            result(name, email);
        })
        .catch(error => {
            err(error);
        });
}
