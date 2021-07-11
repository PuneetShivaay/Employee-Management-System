//function to display all details of  user to right side

function userDetailsList(snapshot) {
    // while (document.getElementById("reUL").firstChild) {
    //     document.getElementById("reUL").removeChild(document.getElementById("reUL").firstChild);
    // }

    // snapshot.forEach((doc) => {
    //     preElement(doc.data())
    // });
    if (snapshot.exists) {
        // console.log("Document data:", snapshot.data());
        preElement(snapshot.data())
    } else {
        // doc.data() will be undefined in this case
        //console.log("No such document!");
        alert("Please update your all details")
    }
}



function viewAadhar(snapData) {
    let close = document.getElementsByClassName("aadhar");
    let i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            window.location.href = snapData.AadharUrl, "_blank";
            console.log(snapData.AadharUrl);
        }
    }
}

function viewPan(snapData) {
    let close = document.getElementsByClassName("pan");
    let i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            window.location.href = snapData.PanUrl, "_blank";
            console.log(snapData.PanUrl)
        }
    }
}

function viewPassbook(snapData) {
    let close = document.getElementsByClassName("passbook");
    let i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            window.location.href = snapData.PassbookUrl, "_blank";

        }
    }
}
function viewPhoto(snapData) {
    let close = document.getElementsByClassName("photo");
    let i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            window.location.href = snapData.PhotoUrl, "_blank";
        }
    }
}

function viewSign(snapData) {
    let close = document.getElementsByClassName("sign");
    let i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            window.location.href = snapData.SignatureUrl, "_blank";
        }
    }
}

function preElement(snapData) {


    let details = [" Date of Appointment : " + snapData.dateOfAppointment, " Email : " + snapData.Email, " Address of Communication : " + snapData.addressOfCommunication, " Permanent Address : " + snapData.permanentAddress,
    " Phone Number : " + snapData.phoneNumber, " WhatsApp Number : " + snapData.WhatsAppNumber, " Aadhar Number : " + snapData.AadharNumber]

    details.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        document.getElementById("reUL").appendChild(li);
    });

    let aadharpic = [" My Aadhar : "]

    aadharpic.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        let span = document.createElement("SPAN");
        let txt = document.createTextNode(" Click Here to View - \u21E9");
        span.className = "aadhar";
        span.appendChild(txt);
        document.getElementById("reUL").appendChild(li);
        li.appendChild(span);
        viewAadhar(snapData)

    });

    let li = document.createElement("li");
    let t = document.createTextNode(" PAN Number : " + snapData.PANNumber);
    li.appendChild(t);
    document.getElementById("reUL").appendChild(li);


    let panpic = [" My PAN : "]
    panpic.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        let span = document.createElement("SPAN");
        let txt = document.createTextNode(" Click Here to View - \u21E9");
        span.className = "pan";
        span.appendChild(txt);
        document.getElementById("reUL").appendChild(li);
        li.appendChild(span);
        viewPan(snapData)

    });

    let bankdetails = [" Bank Name : " + snapData.BankName, , " IFSC Code : " + snapData.IFSCcode, " Account Num : " + snapData.AccountNumber]

    bankdetails.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        document.getElementById("reUL").appendChild(li);
    });


    let passbook = [" PassBook : "]
    passbook.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        var span = document.createElement("SPAN");
        let txt = document.createTextNode(" Click Here to View - \u21E9");
        span.className = "passbook";
        span.appendChild(txt);
        document.getElementById("reUL").appendChild(li);
        li.appendChild(span);
        viewPassbook(snapData)

    });

    let photo = [" My Photo : "]
    photo.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        let span = document.createElement("SPAN");
        let txt = document.createTextNode(" Click Here to View - \u21E9");
        span.className = "photo";
        span.appendChild(txt);
        document.getElementById("reUL").appendChild(li);
        li.appendChild(span);
        viewPhoto(snapData)

    });

    let sign = [" My  Signature : "]

    sign.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        let span = document.createElement("SPAN");
        let txt = document.createTextNode(" Click Here to View - \u21E9");
        span.className = "sign";
        span.appendChild(txt);
        document.getElementById("reUL").appendChild(li);
        li.appendChild(span);
        viewSign(snapData)

    });




}



