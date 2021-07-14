function deleteUser(userData, docId) {
    db.collection("UserDetails").doc(docId).delete().then(() => {
        console.log("Document successfully deleted!", docId);
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}
