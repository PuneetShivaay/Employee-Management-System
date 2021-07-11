//for Admin access to read all users data

function readAllUser() {
    var userData;
    var docId;
    var position = 0;
    db.collection("UserDetails").orderBy("isVarified").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            userData = doc.data();
            docId = doc.id;
            displayUsers(userData, docId, position);
            position++;
        });
    })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}

function displayUsers(userData, docId, position) {
    // var li = document.createElement("li");
    // li.setAttribute('Name', userData.name);
    // li.setAttribute('Verification', userData.isVarified);
    // li.setAttribute('Email', userData.Email);
    // li.setAttribute('Password', userData.password);
    // li.setAttribute('UID', userData.uid);

    // var tq = document.createTextNode('Name-' + "[" + userData.name + "]  " + ' Verification-' + "[" + userData.isVarified + "]  " + ' Email-' + "[" + userData.Email + "]  " + ' Password-' + "[" + userData.password + "]  " + ' UID-' + "[" + userData.uid + "]");
    // li.appendChild(tq);
    // document.getElementById("allUser").appendChild(li);
    let tq = ["Name : " + userData.name, " Date_of_Appointment : " + userData.dateOfAppointment, " Email : " + userData.Email, " Address_of_Communication : " + userData.addressOfCommunication, " Permanent_Address : " + userData.permanentAddress, " Phone_Number : " + userData.phoneNumber, " WhatsApp_Number : " + userData.WhatsAppNumber, " Aadhar_Number : " + userData.AadharNumber, " My_Aadhar : " + userData.AadharUrl, " PAN_Number : " + userData.PANNumber, " My_Pan : " + userData.UploadYourPAN, " Bank_Name : " + userData.BankName, , " IFSC_Code : " + userData.IFSCcode, , " Account_Num : " + userData.AccountNumber, " PassBook : " + userData.BankPhotoCopy, " My_Photo : " + userData.Photo, " User_Sign : " + userData.Signature]

    tq.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        document.getElementById("allUser").appendChild(li);

    });



    var span = document.createElement("SPAN");
    var txt = document.createTextNode("Verify");
    span.className = "verify";
    span.appendChild(txt);

    var span2 = document.createElement("SPAN2");
    var txt2 = document.createTextNode("Remove");
    span2.className = "remove";
    span2.appendChild(txt2);

    // li.appendChild(span2);
    // li.appendChild(span);

    document.getElementById("allUser").appendChild(span2);
    document.getElementById("allUser").appendChild(span);

    var verify = document.getElementsByClassName("verify");
    verify[position].onclick = function () {
        console.log("verify clicked ", docId, "element")
        changeVerification(userData, docId)
    }

    var remove = document.getElementsByClassName("remove");
    remove[position].onclick = function () {
        console.log("Remove clicked ", docId)
        deleteUser(userData, docId)
    }

}
