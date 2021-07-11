var aadharUrl;

function getAadhar(e, fileName) {
    // var aadhar = document.getElementById("UploadYourAadhar_field");
    var selectedFile;
    selectedFile = e.files[0];


    getAadharfunction(selectedFile, fileName); // call below written function
}
function getAadharfunction(selectedFile, fileName) {

    var today = new Date();
    var uuid = create_UUID();
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = '/' + yyyy + '-' + mm + '/';
    var storageRef = firebase.storage().ref(email_id + '/' + fileName + '/' + today + uuid + '/' + selectedFile.name);


    // put file to firebase
    var uploadTask = storageRef.put(selectedFile);

    // all working for progress bar that in html
    // to indicate image uploading... report
    uploadTask.on('state_changed', function (snapshot) {
        // var progress =
        //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // var uploader = document.getElementById('aadharUploader');
        // uploader.value = progress;
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


                aadharUrl = url
                console.log(fileName + " / " + aadharUrl);

            });
    });
};

