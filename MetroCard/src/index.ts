let UserIdAutoIncrement = 1000;
let TicketIdAutoIncrement = 3000;
let BookedIDAutoIncrement = 5000;
let CurrentUserId: User;

function signUp() {
    var signup = document.getElementById("signUpId") as HTMLDivElement;
    var login = document.getElementById("loginId") as HTMLDivElement;
    signup.style.display = "block";
    login.style.display = "none";
}
function login() {
    var signup = document.getElementById("signUpId") as HTMLDivElement;
    var login = document.getElementById("loginId") as HTMLDivElement;
    signup.style.display = "none";
    login.style.display = "block";
}

function displayBlock() {
    var home = document.getElementById("home") as HTMLDivElement;
    var bookTravel = document.getElementById("bookTravel") as HTMLDivElement;
    var viewHistory = document.getElementById("viewHistory") as HTMLDivElement;
    var topup = document.getElementById("topup") as HTMLDivElement;
    var balance = document.getElementById("balance") as HTMLDivElement;

    home.style.display = "none";
    bookTravel.style.display = "none";
    viewHistory.style.display = "none";
    topup.style.display = "none";
    balance.style.display = "none";

}


class User {
    UserId: string;
    UserName: string;
    UserPassword: string;
    Balance: number;

    constructor(paraUserName: string, paraUserPassWord: string) {
        UserIdAutoIncrement++;
        this.UserId = "UID" + UserIdAutoIncrement;
        this.UserName = paraUserName;
        this.UserPassword = paraUserPassWord;
        this.Balance = 0;
    }
}
let UserArrayList: Array<User> = new Array<User>();
UserArrayList.push(new User("dinesh", "123456",));

class TicketsInfo {
    TicketId: string;
    FromLocation: string;
    ToLocation: string;
    Fair: number;

    constructor(paraFromLocation: string, paraToLocation: string, paraFair: number) {
        TicketIdAutoIncrement++;
        this.TicketId = "MR" + TicketIdAutoIncrement;
        this.FromLocation = paraFromLocation;
        this.ToLocation = paraToLocation;
        this.Fair = paraFair;
    }
}

class BookDetails{
    BookedId: string;
    TicketId: string;
    FromLocation: string;
    ToLocation: string;
    Fair: number;
    BookedDate: Date;
    constructor(paraTicketID: string, paraFLocation: string, paraTLocation: string, paraFair: number,paraBookedDate: Date)
    {
        BookedIDAutoIncrement++;
        this.BookedId = "BID" + BookedIDAutoIncrement;
        this.TicketId = paraTicketID;
        this.FromLocation = paraFLocation;
        this.ToLocation = paraTLocation;
        this.Fair = paraFair;
        this.BookedDate = paraBookedDate;
    }
}

let BookedList: Array<BookDetails> = new Array<BookDetails>();

let TicketArrayList: Array<TicketsInfo> = new Array<TicketsInfo>();
TicketArrayList.push(new TicketsInfo("Airport", "Egmore", 55));
TicketArrayList.push(new TicketsInfo("Airport", "Koyambedu", 25));
TicketArrayList.push(new TicketsInfo("Alandur", "Koyambedu", 35));
TicketArrayList.push(new TicketsInfo("Koyambedu", "Egmore", 55));
TicketArrayList.push(new TicketsInfo("Vadapalani", "Egmore", 65));
TicketArrayList.push(new TicketsInfo("Arumbakkam", "Egmore", 15));


function signUpValidate() {
    var email = document.getElementById("userName") as HTMLInputElement;
    var phone = document.getElementById("password") as HTMLInputElement;

    if (email.value != "" && phone.value != "") {
        UserArrayList.push(new User(email.value, phone.value));
        alert("Registration Successfully..!");
        // var id = document.getElementById("")
        login();
    } else {
        alert("Invalid Input pls check");
    }
}

function loginValidate() {
    var lemail = document.getElementById("lemail") as HTMLInputElement;

    if (lemail.value != "") {
        var check = false;
        UserArrayList.forEach(item => {
            if (item.UserName == lemail.value) {
                CurrentUserId = item;
                check = true;
            }
        });
        if (check) {
            alert("Success" + lemail.value);
            var id = document.getElementById("loginMain") as HTMLDivElement;
            var main = document.getElementById("main") as HTMLDivElement;
            id.style.display = "none";
            main.style.display = "block";
        } else {
            alert("Invalid UserName");
        }
    } else {
        alert("Invalid UserName pls check");
    }
}

function HomePage() {
    displayBlock();
    var home = document.getElementById("home") as HTMLInputElement;
    home.style.display = "block";
}

function BookTravels() {
    displayBlock();
    var bookTravel = document.getElementById("bookTravel") as HTMLDivElement;
    bookTravel.style.display = "block";
    renderDefault();
}

function viewHistory() {
    displayBlock();
    var viewHistory = document.getElementById("viewHistory") as HTMLDivElement;
    viewHistory.style.display = "block";
    renderBookDetails();
}

function topup() {
    displayBlock();
    var topup = document.getElementById("topup") as HTMLDivElement;
    topup.style.display = "block";
}

function showBlance() {
    displayBlock();
    var balance = document.getElementById("balance") as HTMLDivElement;
    balance.style.display = "block";
    showBalanceID.innerHTML = "Show Balance: " + CurrentUserId.Balance;
}
function WalletRecharge() {
    CurrentUserId.Balance += parseInt(addBalane.value);
    alert("Successfully..!");
    addBalane.value = "";
}

//addingle default avilable tickets values

const renderDefault = () => {
    tableBody.innerHTML = "";
    TicketArrayList.forEach((item) =>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td><input class="input-control1" type="text" id="${item.TicketId}e_mName" value="${item.TicketId}" readonly></td>
        <td><input class="input-control1" type="text" id="${item.TicketId}e_mPrice" value="${item.FromLocation}" readonly></td>
        <td><input class="input-control1" type="text" id="${item.TicketId}e_mQty" value="${item.ToLocation}" readonly></td>
        <td><input class="input-control1" type="text" id="${item.TicketId}e_mExpire" value="${item.Fair}" readonly></td>
      
        <td style="">
          <button class="btn" onclick="bookTicket('${item.TicketId}')">Book</button><br><br>
        </td>
        `;
        tableBody.appendChild(row);
    });
}

function bookTicket(id: string) {
    TicketArrayList.forEach((item) => {
        if (item.TicketId == id) {
            if (item.Fair <= CurrentUserId.Balance) {
                BookedList.push(new BookDetails(item.TicketId, item.FromLocation, item.ToLocation, item.Fair, new Date()));
                CurrentUserId.Balance -= item.Fair;
                alert("Booked Successfully...!");
            } else {
                alert("Insufficient Balance..!");
            }
        }
    });
}

const renderBookDetails = () =>{
    tableBody1.innerHTML = "";
    BookedList.forEach((item)=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td><input class="input-control1" type="text" id="${item.TicketId}e_mName" value="${item.TicketId}" readonly></td>
        <td><input class="input-control1" type="text" id="${item.TicketId}e_mPrice" value="${item.FromLocation}" readonly></td>
        <td><input class="input-control1" type="text" id="${item.TicketId}e_mQty" value="${item.ToLocation}" readonly></td>
        <td><input class="input-control1" type="text" id="${item.TicketId}e_mExpire" value="${item.Fair}" readonly></td>
        <td><input class="input-control1" type="text" id="${item.TicketId}e_mExpire" value="${item.BookedDate.toLocaleDateString()}" readonly></td>
        `;
        tableBody1.appendChild(row);
    });
}

const showBalanceID = document.getElementById("balance") as HTMLDivElement;
const addBalane = document.getElementById("addRecharge") as HTMLInputElement;
const tableBody = document.querySelector("#bookTable tbody") as HTMLTableSectionElement;
const tableBody1 = document.querySelector("#viewHistory1 tbody") as HTMLTableSectionElement;

