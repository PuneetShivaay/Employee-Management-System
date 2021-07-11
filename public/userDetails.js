//get details of current user at rightmost side

function userDetails() {
    db.collection("UserDetails").doc(firebase.auth().currentUser.uid).onSnapshot((snapshot) => {

        userDetailsList(snapshot)

    });
}
