"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let UserIdAutoIncrement = 1000;
let TicketIdAutoIncrement = 3000;
let BookedIDAutoIncrement = 5000;
let CurrentUserId;
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
function logout() {
    var main = document.getElementById("main");
    var loginMain = document.getElementById("loginMain");
    main.style.display = "none";
    loginMain.style.display = "block";
}
function displayBlock() {
    var home = document.getElementById("home");
    var bookTravel = document.getElementById("bookTravel");
    var viewHistory = document.getElementById("viewHistory");
    var topup = document.getElementById("topup");
    var balance = document.getElementById("balance");
    home.style.display = "none";
    bookTravel.style.display = "none";
    viewHistory.style.display = "none";
    topup.style.display = "none";
    balance.style.display = "none";
}
//Api Integration
function AddUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5049/api/UserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Add User Faild');
        }
        alert("Success...!");
        // login();
    });
}
function fetchUsersApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5049/api/UserInfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return yield response.json();
    });
}
function fetchTicketListApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5049/api/TicketDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return yield response.json();
    });
}
function fetchTravelListApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5049/api/TravelDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return yield response.json();
    });
}
function BookTicketApi(order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5049/api/TravelDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error('Book Ticket faild');
        }
        alert("Success...!");
    });
}
function UpdateUserApi(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5049/api/UserInfo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to update user');
        }
        alert("check");
        //   renderContacts();
    });
}
// async function GetTravelList(id: number): Promise<void> {
//     const response = await fetch(`http://localhost:5049/api/TravelDetails/${id}`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
//     if (!response.ok) {
//         throw new Error('Failed to update medicine');
//     }
// }
// class User {
//     UserId: string;
//     UserName: string;
//     UserPassword: string;
//     Balance: number;
//     constructor(paraUserName: string, paraUserPassWord: string) {
//         UserIdAutoIncrement++;
//         this.UserId = "UID" + UserIdAutoIncrement;
//         this.UserName = paraUserName;
//         this.UserPassword = paraUserPassWord;
//         this.Balance = 0;
//     }
// }
// let UserArrayList: Array<User> = new Array<User>();
// UserArrayList.push(new User("dinesh", "123456",));
// class TicketsInfo {
//     TicketId: string;
//     FromLocation: string;
//     ToLocation: string;
//     Fair: number;
//     constructor(paraFromLocation: string, paraToLocation: string, paraFair: number) {
//         TicketIdAutoIncrement++;
//         this.TicketId = "MR" + TicketIdAutoIncrement;
//         this.FromLocation = paraFromLocation;
//         this.ToLocation = paraToLocation;
//         this.Fair = paraFair;
//     }
// }
// class BookDetails {
//     BookedId: string;
//     TicketId: string;
//     FromLocation: string;
//     ToLocation: string;
//     Fair: number;
//     BookedDate: Date;
//     constructor(paraTicketID: string, paraFLocation: string, paraTLocation: string, paraFair: number, paraBookedDate: Date) {
//         BookedIDAutoIncrement++;
//         this.BookedId = "BID" + BookedIDAutoIncrement;
//         this.TicketId = paraTicketID;
//         this.FromLocation = paraFLocation;
//         this.ToLocation = paraTLocation;
//         this.Fair = paraFair;
//         this.BookedDate = paraBookedDate;
//     }
// }
function signUpValidate() {
    var uName = document.getElementById("userName");
    var email = document.getElementById("emaiID");
    var passWord = document.getElementById("password");
    var phoneNum = document.getElementById("phoneNum");
    if (email.value != "" && phoneNum.value != "") {
        const user = {
            cardID: 0,
            userName: uName.value,
            userEmail: email.value,
            userPassword: passWord.value,
            userPhoneNumber: phoneNum.value,
            balance: 0
        };
        AddUser(user);
        alert("Registration Successfully..!");
        // var id = document.getElementById("")
        login();
    }
    else {
        alert("Invalid Input pls check");
    }
}
function loginValidate() {
    return __awaiter(this, void 0, void 0, function* () {
        var lemail = document.getElementById("lemail");
        var lpass = document.getElementById("lpass");
        if (lemail.value != "") {
            var check = false;
            const userList = yield fetchUsersApi();
            userList.forEach(item => {
                if (item.userEmail == lemail.value && item.userPassword == lpass.value) {
                    CurrentUserId = item;
                    check = true;
                    HomePage();
                }
            });
            if (check) {
                alert("Success" + lemail.value);
                var id = document.getElementById("loginMain");
                var main = document.getElementById("main");
                id.style.display = "none";
                main.style.display = "block";
            }
            else {
                alert("Invalid EmailID or PassWord..!");
            }
        }
        else {
            alert("Invalid UserName pls check");
        }
    });
}
function HomePage() {
    displayBlock();
    var home = document.getElementById("home");
    home.innerHTML = "Welcome " + CurrentUserId.userName;
    home.style.display = "block";
}
function BookTravels() {
    displayBlock();
    var bookTravel = document.getElementById("bookTravel");
    bookTravel.style.display = "block";
    renderDefault();
}
function viewHistory() {
    displayBlock();
    var viewHistory = document.getElementById("viewHistory");
    viewHistory.style.display = "block";
    renderBookDetails();
}
function topup() {
    displayBlock();
    var topup = document.getElementById("topup");
    topup.style.display = "block";
}
function showBlance() {
    displayBlock();
    var balance = document.getElementById("balance");
    balance.style.display = "block";
    showBalanceID.innerHTML = "Show Balance: " + CurrentUserId.balance;
}
function WalletRecharge() {
    CurrentUserId.balance += parseInt(addBalane.value);
    UpdateUserApi(CurrentUserId.cardID, CurrentUserId);
    alert("Successfully..!");
    addBalane.value = "";
}
//addingle default avilable tickets values
function renderDefault() {
    return __awaiter(this, void 0, void 0, function* () {
        tableBody.innerHTML = "";
        const ticketList = yield fetchTicketListApi();
        ticketList.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td><input class="input-control1" type="text" id="${item.ticketID}e_mName" value="${item.ticketID}" readonly></td>
        <td><input class="input-control1" type="text" id="${item.ticketID}e_mPrice" value="${item.fromLocation}" readonly></td>
        <td><input class="input-control1" type="text" id="${item.ticketID}e_mQty" value="${item.toLocation}" readonly></td>
        <td><input class="input-control1" type="number" id="${item.ticketID}e_mExpire" value="${item.ticketPrice}" readonly></td>
      
        <td style="">
          <button class="btn" onclick="bookTicket('${item.ticketID}')">Book</button><br><br>
        </td>
        `;
            tableBody.appendChild(row);
        });
    });
}
// const renderDefault = () => {
//     tableBody.innerHTML = "";
//     const ticketList = await fetchTravelListApi();
//     TicketArrayList.forEach((item) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//         <td><input class="input-control1" type="text" id="${item.TicketId}e_mName" value="${item.TicketId}" readonly></td>
//         <td><input class="input-control1" type="text" id="${item.TicketId}e_mPrice" value="${item.FromLocation}" readonly></td>
//         <td><input class="input-control1" type="text" id="${item.TicketId}e_mQty" value="${item.ToLocation}" readonly></td>
//         <td><input class="input-control1" type="text" id="${item.TicketId}e_mExpire" value="${item.Fair}" readonly></td>
//         <td style="">
//           <button class="btn" onclick="bookTicket('${item.TicketId}')">Book</button><br><br>
//         </td>
//         `;
//         tableBody.appendChild(row);
//     });
// }
function bookTicket(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const ticketList = yield fetchTicketListApi();
        ticketList.forEach((item) => {
            if (item.ticketID == id) {
                if (item.ticketPrice <= CurrentUserId.balance) {
                    const book = {
                        travelID: undefined,
                        cardID: CurrentUserId.cardID,
                        fromLocation: item.fromLocation,
                        toLocation: item.toLocation,
                        date: new Date().toISOString().substring(0, 10),
                        travelCost: item.ticketPrice
                    };
                    BookTicketApi(book);
                    CurrentUserId.balance -= item.ticketPrice;
                    UpdateUserApi(CurrentUserId.cardID, CurrentUserId);
                    alert("Booked Successfully...!");
                }
                else {
                    alert("Insufficient Balance..!");
                }
            }
        });
    });
}
function renderBookDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const travelHistory = yield fetchTravelListApi();
        tableBody1.innerHTML = "";
        travelHistory.forEach((item) => {
            if (item.cardID == CurrentUserId.cardID) {
                const row = document.createElement("tr");
                row.innerHTML = `
                <td><input class="input-control1" type="text" id="${item.travelID}e_mName" value="${item.travelID}" readonly></td>
                <td><input class="input-control1" type="text" id="${item.travelID}e_mPrice" value="${item.fromLocation}" readonly></td>
                <td><input class="input-control1" type="text" id="${item.travelID}e_mQty" value="${item.toLocation}" readonly></td>
                <td><input class="input-control1" type="text" id="${item.travelID}e_mExpire" value="${item.travelCost}" readonly></td>
                <td><input class="input-control1" type="text" id="${item.travelID}e_mExpire" value="${item.date.toString().substring(0, 10)}" readonly></td>
                `;
                tableBody1.appendChild(row);
            }
        });
    });
}
// const renderBookDetails = () => {
//     tableBody1.innerHTML = "";
//     BookedList.forEach((item) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//         <td><input class="input-control1" type="text" id="${item.TicketId}e_mName" value="${item.TicketId}" readonly></td>
//         <td><input class="input-control1" type="text" id="${item.TicketId}e_mPrice" value="${item.FromLocation}" readonly></td>
//         <td><input class="input-control1" type="text" id="${item.TicketId}e_mQty" value="${item.ToLocation}" readonly></td>
//         <td><input class="input-control1" type="text" id="${item.TicketId}e_mExpire" value="${item.Fair}" readonly></td>
//         <td><input class="input-control1" type="text" id="${item.TicketId}e_mExpire" value="${item.BookedDate.toLocaleDateString()}" readonly></td>
//         `;
//         tableBody1.appendChild(row);
//     });
// }
const showBalanceID = document.getElementById("balance");
const addBalane = document.getElementById("addRecharge");
const tableBody = document.querySelector("#bookTable tbody");
const tableBody1 = document.querySelector("#viewHistory1 tbody");
