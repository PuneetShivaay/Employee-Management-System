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
    var li = document.createElement("li");
    // li.setAttribute('Name', userData.name);
    // li.setAttribute('Verification', userData.isVarified);
    // li.setAttribute('Email', userData.Email);
    // li.setAttribute('Password', userData.password);
    // li.setAttribute('UID', userData.uid);

    // var tq = document.createTextNode('Name-' + "[" + userData.name + "]  " + ' Verification-' + "[" + userData.isVarified + "]  " + ' Email-' + "[" + userData.Email + "]  " + ' Password-' + "[" + userData.password + "]  " + ' UID-' + "[" + userData.uid + "]");
    // li.appendChild(tq);
    // document.getElementById("allUser").appendChild(li);

    let qq = document.createTextNode("Name : " + userData.name + " Date_of_Appointment : " + userData.dateOfAppointment + " Email : " + userData.Email + " Address_of_Communication : " + userData.addressOfCommunication + " Permanent_Address : " + userData.permanentAddress + " Phone_Number : " + userData.phoneNumber + " WhatsApp_Number : " + userData.WhatsAppNumber + " Aadhar_Number : " + userData.AadharNumber + " PAN_Number : " + userData.PANNumber + " Bank_Name : " + userData.BankName + " IFSC_Code : " + userData.IFSCcode + " Account_Num : " + userData.AccountNumber);

    li.appendChild(qq);
    document.getElementById("allUser").appendChild(li);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("Verify");
    span.className = "verify";
    span.appendChild(txt);


    var span2 = document.createElement("SPAN2");
    var txt2 = document.createTextNode("Remove");
    span2.className = "remove";
    span2.appendChild(txt2);

    var span3 = document.createElement("SPAN3");
    var txt3 = document.createTextNode("Aadhar");
    span3.className = "aadhar";
    span3.appendChild(txt3);

    var span4 = document.createElement("SPAN4");
    var txt4 = document.createTextNode("Pan");
    span4.className = "pan";
    span4.appendChild(txt4);

    var span5 = document.createElement("SPAN5");
    var txt5 = document.createTextNode("Passbook");
    span5.className = "passbook";
    span5.appendChild(txt5);

    var span6 = document.createElement("SPAN6");
    var txt6 = document.createTextNode("Photo");
    span6.className = "photo";
    span6.appendChild(txt6);

    li.appendChild(span2);
    li.appendChild(span);
    li.appendChild(span3);
    li.appendChild(span4);
    li.appendChild(span5);
    li.appendChild(span6);

    var verify = document.getElementsByClassName("verify");
    verify[position].onclick = function () {
        console.log("verify clicked ", docId, "element")
        changeVerification(userData, docId)

    }

    var remove = document.getElementsByClassName("remove");
    remove[position].onclick = function () {
        console.log("Remove clicked ", docId)
        //deleteUser(userData, docId)

    }

    var aadhar = document.getElementsByClassName("aadhar");
    aadhar[position].onclick = function () {
        console.log("aadhar clicked ", docId, "element")
        window.location.href = userData.AadharUrl, "_blank";
        console.log(userData.AadharUrl);
    }
    var pan = document.getElementsByClassName("pan");
    pan[position].onclick = function () {
        console.log("pan clicked ", docId, "element")
        window.location.href = userData.PanUrl, "_blank";

    }

    var passbook = document.getElementsByClassName("passbook");
    passbook[position].onclick = function () {
        console.log("passbook clicked ", docId, "element")
        window.location.href = userData.PassbookUrl, "_blank";

    }

    var photo = document.getElementsByClassName("photo");
    photo[position].onclick = function () {
        console.log("photo clicked ", docId, "element")
        window.location.href = userData.PhotoUrl, "_blank";

    }

}
