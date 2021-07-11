// function updateDetails(email, password, name, dateOfAppointment, appointmentType, addressOfCommunication, permanentAddress, phoneNumber, WhatsAppNumber, AadharNumber, UploadYourAadhar, PANNumber, UploadYourPAN, BankName,
//     IFSCcode, AccountNumber, BankPhotoCopy, Photo, Signature, Declaration) {
function updateDetails(downloadURL, files) {
    var userName = document.getElementById("Rname_field").value;
    var userEmail = document.getElementById("Remail_field").value;
    // var userPass = document.getElementById("Rpassword_field").value;
    //     var userConPass = document.getElementById("RconPassword_field").value;

    var dateOfAppointment = document.getElementById("DateOfAppointment_field").value;
    var appointmentType = document.getElementById("Appointment_field").value;
    var addressOfCommunication = document.getElementById("AddressOfCommunication_field").value;
    var permanentAddress = document.getElementById("PermanentAddress_field").value;
    var phoneNumber = document.getElementById("phoneNumber_field").value;
    var WhatsAppNumber = document.getElementById("WhatsAppNumber_field").value;
    var AadharNumber = document.getElementById("AadharNumber_field").value;
    var UploadYourAadhar = document.getElementById("UploadYourAadhar_field").value;
    var PANNumber = document.getElementById("PANnumber_field").value;
    var UploadYourPAN = document.getElementById("UploadYourPAN_field").value;
    var BankName = document.getElementById("BankName_field").value;

    var IFSCcode = document.getElementById("IFSCcode_field").value;
    var AccountNumber = document.getElementById("AccountNumber_field").value;
    var BankPhotoCopy = document.getElementById("BankPhotoCopy_field").value;
    var Photo = document.getElementById("Photo_field").value;
    var Signature = document.getElementById("Signature_field").value;
    //var Declaration = document.getElementById("Declaration_field").value;
    var Declaration = "True";



    db.collection("UserDetails").doc(firebase.auth().currentUser.uid).set({
        Email: email_id,
        //password: password,
        name: username,
        uid: firebase.auth().currentUser.uid,
        isVarified: false,
        dateOfAppointment: dateOfAppointment,
        appointmentType: appointmentType,
        addressOfCommunication: addressOfCommunication,
        permanentAddress: permanentAddress,
        phoneNumber: phoneNumber,
        WhatsAppNumber: WhatsAppNumber,
        AadharNumber: AadharNumber,
        UploadYourAadhar: UploadYourAadhar,
        AadharUrl: aadharUrl,
        PANNumber: PANNumber,
        PanUrl: panUrl,
        UploadYourPAN: downloadURL + files,
        BankName: BankName,
        IFSCcode: IFSCcode,
        AccountNumber: AccountNumber,
        BankPhotoCopy: BankPhotoCopy,
        PassbookUrl: passbookUrl,
        Photo: Photo,
        PhotoUrl: photoUrl,
        Signature: Signature,
        SignatureUrl: signatureUrl,
        Declaration: Declaration
    })

        .then(() => {
            console.log("Document successfully written!");
            alert("You have successfully updated your details");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
            alert("Error writing document")
        });
};
