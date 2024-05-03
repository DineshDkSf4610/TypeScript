"use strict";
let MedicineIdAutoIncrement = 10;
let UserIdAutoIncrement = 1000;
let CurrentUserId;
class User {
    constructor(paraUserEmail, paraUserPassWord, paraUserPhoneNumber) {
        UserIdAutoIncrement++;
        this.UserId = "UID" + UserIdAutoIncrement;
        this.UserEmail = paraUserEmail;
        this.UserPassword = paraUserPassWord;
        this.UserPhoneNumber = paraUserPhoneNumber;
    }
}
let UserArrayList = new Array();
UserArrayList.push(new User("dinesh", "123456", "6384225424"));
UserArrayList.push(new User("kumar", "123456", "6384225424"));
function signUpValidate() {
    var pass = document.getElementById("password");
    var conPass = document.getElementById("conPass");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    if (pass.value == conPass.value) {
        UserArrayList.push(new User(email.value, pass.value, phone.value));
        alert("Registration Successfully..!");
        // var id = document.getElementById("")
        login();
    }
    else {
        alert("Password mismatch pls check");
    }
}
function signUp() {
    var signup = document.getElementById("signUpId");
    var login = document.getElementById("loginId");
    signup.style.display = "block";
    login.style.display = "none";
}
function login() {
    var signup = document.getElementById("signUpId");
    var login = document.getElementById("loginId");
    signup.style.display = "none";
    login.style.display = "block";
}
function loginValidate() {
    var pass = document.getElementById("lpassword");
    var email = document.getElementById("lemail");
    if (email.value != "" && pass.value != "") {
        var check = false;
        UserArrayList.forEach(item => {
            if (item.UserEmail == email.value && item.UserPassword == pass.value) {
                check = true;
            }
        });
        if (check) {
            alert("Success" + pass.value + email.value);
            var id = document.getElementById("loginMain");
            var main = document.getElementById("main");
            id.style.display = "none";
            main.style.display = "block";
        }
        else {
            alert("Invalid UserName or PassWord");
        }
    }
    else {
        alert("Password mismatch pls check");
    }
}
function HomePage() {
    var home = document.getElementById("home");
    var mList = document.getElementById("mList");
    var purchase = document.getElementById("purchase");
    var cancel = document.getElementById("cancel");
    var topup = document.getElementById("topup");
    var balance = document.getElementById("balance");
    home.style.display = "block";
    mList.style.display = "none";
    purchase.style.display = "none";
    cancel.style.display = "none";
    topup.style.display = "none";
    balance.style.display = "none";
}
function MedicinePage() {
    var home = document.getElementById("home");
    var mList = document.getElementById("mList");
    var purchase = document.getElementById("purchase");
    var cancel = document.getElementById("cancel");
    var topup = document.getElementById("topup");
    var balance = document.getElementById("balance");
    home.style.display = "none";
    mList.style.display = "block";
    purchase.style.display = "none";
    cancel.style.display = "none";
    topup.style.display = "none";
    balance.style.display = "none";
    // MedicineListShow()
}
function PurchasePage() {
    var home = document.getElementById("home");
    var mList = document.getElementById("mList");
    var purchase = document.getElementById("purchase");
    var cancel = document.getElementById("cancel");
    var topup = document.getElementById("topup");
    var balance = document.getElementById("balance");
    home.style.display = "none";
    mList.style.display = "none";
    purchase.style.display = "block";
    cancel.style.display = "none";
    topup.style.display = "none";
    balance.style.display = "none";
}
function CancelPage() {
    var home = document.getElementById("home");
    var mList = document.getElementById("mList");
    var purchase = document.getElementById("purchase");
    var cancel = document.getElementById("cancel");
    var topup = document.getElementById("topup");
    var balance = document.getElementById("balance");
    home.style.display = "none";
    mList.style.display = "none";
    purchase.style.display = "none";
    cancel.style.display = "block";
    topup.style.display = "none";
    balance.style.display = "none";
}
function TopUp() {
    var home = document.getElementById("home");
    var mList = document.getElementById("mList");
    var purchase = document.getElementById("purchase");
    var cancel = document.getElementById("cancel");
    var topup = document.getElementById("topup");
    var balance = document.getElementById("balance");
    home.style.display = "none";
    mList.style.display = "none";
    purchase.style.display = "none";
    cancel.style.display = "none";
    topup.style.display = "block";
    balance.style.display = "none";
}
function ShowBalance() {
    var home = document.getElementById("home");
    var mList = document.getElementById("mList");
    var purchase = document.getElementById("purchase");
    var cancel = document.getElementById("cancel");
    var topup = document.getElementById("topup");
    var balance = document.getElementById("balance");
    home.style.display = "none";
    mList.style.display = "none";
    purchase.style.display = "none";
    cancel.style.display = "none";
    topup.style.display = "none";
    balance.style.display = "block";
}
class MedicineInfo {
    constructor(paramMedicineName, paramMedicinePrice, paramMedicineQtry, paramMedicineExpire) {
        MedicineIdAutoIncrement++;
        this.MedicineId = "MID" + MedicineIdAutoIncrement;
        this.MedicineName = paramMedicineName;
        this.MedicinePrice = paramMedicinePrice;
        this.MedicineQty = paramMedicineQtry;
        this.MedicineExpire = paramMedicineExpire;
    }
}
//Store Data
// let MedicineList: Array<MedicineInfo> = new Array<MedicineInfo>();
//Add Default Values
// MedicineList.push(new MedicineInfo("Paracetomol", 2, 50, new Date(2024, 10, 10)));
// const tableBody = document.querySelector("#dataTable tbody") as HTMLTableSectionElement
// function MedicineListShow() {
// let medicineDisplay = document.getElementById("") as HTMLTableElement;
// medicineDisplay.style.display = "block";
//     tableBody.innerHTML = "";
//     for (let i = 0; i < MedicineList.length; i++) {
//         const row = document.createElement("tr");
//         row.innerHTML = `<tr><td>${MedicineList[i].MedicineName}</td><td>${MedicineList[i].MedicinePrice}</td><td>${MedicineList[i].MedicineQty}</td><td>${MedicineList[i].MedicineName}</td><td><button>Edit</button><button>Delete</button></td></tr>`;
//         row.appendChild(row);
//     }
// }
// New
//Store Data
let MedicineList = new Array();
//Add Default Values
MedicineList.push(new MedicineInfo("Paracetomol", 2, 50, new Date(2024, 10, 10)));
const medicineForm = document.getElementById("medicineForm");
const tableBody = document.querySelector("#dataTable tbody");
// medicineForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     MedicinePage();
//     readerDefault();
//     medicineForm.reset();
// });
const readerDefault = () => {
    MedicinePage();
    tableBody.innerHTML = "";
    MedicineList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.MedicineName}</td>
        <td>${item.MedicinePrice}</td>
        <td>${item.MedicineQty}</td>
        <td>${item.MedicineExpire.toLocaleDateString()}</td>
        <td>
          <button onclick="edit(${item.MedicineId})">Edit</button>
          <button onclick="remove(${item.MedicineId})">Delete</button>
        </td>
        `;
        tableBody.appendChild(row);
    });
};
