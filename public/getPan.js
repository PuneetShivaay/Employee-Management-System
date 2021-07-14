var panUrl;

function getPan(e, fileName) {

    var selectedFile;
    selectedFile = e.files[0];


    getPanfunction(selectedFile, fileName); // call below written function
}
function getPanfunction(selectedFile, fileName) {
    var today = new Date();
    var uuid = create_UUID();

    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = '/' + yyyy + '-' + mm + '/';
    var storageRef = firebase.storage().ref(email_id + '/' + fileName + '/' + today + uuid + '/' + selectedFile.name);

    var uploadTask = storageRef.put(selectedFile);

    uploadTask.on('state_changed', function (snapshot) {

        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED:
                console.log('Upload is paused');
                break;
            case firebase.storage.TaskState.RUNNING:
                console.log('Upload is running');
                break;
        }
    }, function (error) {
        console.log(error);
    }, function () {

        // get the uploaded image url back
        uploadTask.snapshot.ref.getDownloadURL().then(
            function (url) {

                panUrl = url
                console.log(fileName + " / " + panUrl);

            });
    });
};

