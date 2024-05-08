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
let CurrentUserId;
let SelectedBook;
//Api Integration
function AddUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5152/api/UserInfo', {
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
        const apiUrl = 'http://localhost:5152/api/UserInfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return yield response.json();
    });
}
function UpdateUserApi(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5152/api/UserInfo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to update user');
        }
        // alert("check");
        //   renderContacts();
    });
}
function UpdateBookApi(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5152/api/BookDetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to update user');
        }
        // alert("check");
        //   renderContacts();
    });
}
function UpdateBorrowBookApi(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5152/api/BorrowDetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to update user');
        }
        // alert("check");
        //   renderContacts();
    });
}
function fetchBookListApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5152/api/BookDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return yield response.json();
    });
}
function fetchBorrowListApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5152/api/BorrowDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return yield response.json();
    });
}
function fetchBookApi(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = `http://localhost:5152/api/BookDetails/${id}`;
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return yield response.json();
    });
}
function fetchBorrowApi(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = `http://localhost:5152/api/BorrowDetails/${id}`;
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return yield response.json();
    });
}
function AddBorrowDetails(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5152/api/BorrowDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Add User Faild');
        }
        // alert("Success...!");
        // login();
    });
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
function HomePage() {
    displayBlock();
    var home = document.getElementById("home");
    home.innerHTML = "Welcome " + CurrentUserId.userName;
    home.style.display = "block";
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
    var returnBook = document.getElementById("returnBook1");
    returnBook.style.display = "none";
    home.style.display = "none";
    bookTravel.style.display = "none";
    viewHistory.style.display = "none";
    topup.style.display = "none";
    balance.style.display = "none";
}
function topup() {
    displayBlock();
    var topup = document.getElementById("topup");
    topup.style.display = "block";
}
function BorrowBook() {
    displayBlock();
    var bookTravel = document.getElementById("bookTravel");
    bookTravel.style.display = "block";
    BorrowQtyForm.style.display = "none";
    renderBookList();
}
function signUpValidate() {
    var uName = document.getElementById("userName");
    var email = document.getElementById("emaiID");
    var passWord = document.getElementById("password");
    var phoneNum = document.getElementById("phoneNum");
    var gender = document.getElementById("gender");
    var department = document.getElementById("department");
    if (email.value != "" && phoneNum.value != "") {
        const user = {
            userID: undefined,
            userName: uName.value,
            emailID: email.value,
            password: passWord.value,
            mobileNumber: phoneNum.value,
            gender: gender.value,
            department: department.value,
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
function showBlance() {
    displayBlock();
    var balance = document.getElementById("balance");
    balance.style.display = "block";
    showBalanceID.innerHTML = "Show Balance: " + CurrentUserId.balance;
}
function WalletRecharge() {
    CurrentUserId.balance += parseInt(addBalane.value);
    UpdateUserApi(CurrentUserId.userID, CurrentUserId);
    alert("Successfully..!");
    addBalane.value = "";
}
function viewHistory() {
    displayBlock();
    var viewHistory = document.getElementById("viewHistory");
    viewHistory.style.display = "block";
    BorrowHistoryList();
}
function ReturnBook() {
    displayBlock();
    var returnBook = document.getElementById("returnBook1");
    returnBook.style.display = "block";
    // BorrowHistoryList();
    RenderReturnList();
}
function RenderReturnList() {
    return __awaiter(this, void 0, void 0, function* () {
        const borrowList = yield fetchBorrowListApi();
        tableBody2.innerHTML = "";
        borrowList.forEach((item) => {
            if (CurrentUserId.userID == item.userID && item.status == "Borrowed") {
                const row = document.createElement("tr");
                row.innerHTML = `
                <td>${item.bookID}</td>
                <td>${item.borrowedDate.toString().substring(0, 10)}</td>
                <td>${item.status}</td>
                <td style="">
                <button class="btn" onclick="returnBorrowBook(${item.borrowID})">Return</button><br><br>
                </td>
                `;
                tableBody2.appendChild(row);
            }
        });
    });
}
function returnBorrowBook(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const borrowBook = yield fetchBorrowApi(id);
        const returnDate = new Date(borrowBook.borrowedDate);
        const countDate = Math.abs(returnDate.getDate() - new Date().getDate());
        const book = yield fetchBookApi(borrowBook.bookID);
        book.bookCount += borrowBook.borrowBookCount;
        if (countDate >= 15) {
            // fine
            borrowBook.paidFineAmount += countDate - 15;
            borrowBook.status = "Returned";
            if (CurrentUserId.balance >= borrowBook.paidFineAmount) {
                UpdateBorrowBookApi(borrowBook.borrowID, borrowBook);
                UpdateBookApi(book.bookID, book);
                CurrentUserId.balance -= borrowBook.paidFineAmount;
                UpdateUserApi(CurrentUserId.userID, CurrentUserId);
                alert("Returned Successfully....!");
                RenderReturnList();
            }
            else {
                alert("Insufficient Balance...!");
            }
        }
        else {
            borrowBook.status = "Returned";
            UpdateBorrowBookApi(borrowBook.borrowID, borrowBook);
            UpdateBookApi(book.bookID, book);
            alert("Returned Successfully....!");
            RenderReturnList();
            //fine zero
        }
    });
}
function BorrowHistoryList() {
    return __awaiter(this, void 0, void 0, function* () {
        const borrowList = yield fetchBorrowListApi();
        tableBody1.innerHTML = "";
        borrowList.forEach((item) => {
            if (CurrentUserId.userID == item.userID) {
                const row = document.createElement("tr");
                row.innerHTML = `
                <td>${item.bookID}</td>
                <td>${item.borrowBookCount}</td>
                <td>${item.borrowedDate.toString().substring(0, 10)}</td>
                <td>${item.status}</td>
                <td>${item.paidFineAmount}</td>
                `;
                tableBody1.appendChild(row);
            }
        });
    });
}
function renderBookList() {
    return __awaiter(this, void 0, void 0, function* () {
        tableBody.innerHTML = "";
        const ticketList = yield fetchBookListApi();
        ticketList.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${item.bookName}</td>
        <td>${item.authorName}</td>
        <td>${item.bookCount}</td>
      
        <td style="">
          <button class="btn" onclick="BorrowBookFun1(${item.bookID})">Borrow</button><br><br>
        </td>
        `;
            tableBody.appendChild(row);
        });
    });
}
function BorrowBookFun1(id) {
    return __awaiter(this, void 0, void 0, function* () {
        BorrowQtyForm.style.display = "block";
        const book = yield fetchBookApi(id);
        SelectedBook = book;
    });
}
function BorrowBookFun() {
    return __awaiter(this, void 0, void 0, function* () {
        var purchaseAddQty = document.getElementById("purchaseAddQty");
        if (purchaseAddQty.value != "") {
            const book = SelectedBook;
            if (book.bookCount > 0) {
                book.bookCount -= 1;
                const addBorrow = {
                    borrowID: undefined,
                    bookID: book.bookID,
                    userID: CurrentUserId.userID,
                    borrowedDate: new Date().toISOString().substring(0, 10),
                    borrowBookCount: parseInt(purchaseAddQty.value),
                    status: "Borrowed",
                    paidFineAmount: 0
                };
                var alreadyBookCount = 0;
                const borrowList = yield fetchBorrowListApi();
                borrowList.forEach(item => {
                    if (item.userID == CurrentUserId.userID && item.status == "Borrowed") {
                        alreadyBookCount++;
                    }
                });
                if ((alreadyBookCount + parseInt(purchaseAddQty.value)) <= 3) {
                    UpdateBookApi(book.bookID, book);
                    AddBorrowDetails(addBorrow);
                    alert("Borrowed Successfully...!");
                    BorrowQtyForm.style.display = "none";
                    purchaseAddQty.value = "";
                }
                else {
                    alert("You can have maximum of 3 borrowed books. Your already borrowed books count is " + alreadyBookCount + " and requested count is " + purchaseAddQty.value + ", which exceeds 3.");
                }
            }
            else {
                alert("Not Available Book...!");
            }
        }
        else {
            alert("Please Enter a Quantity");
        }
    });
}
function loginValidate() {
    return __awaiter(this, void 0, void 0, function* () {
        var lemail = document.getElementById("lemail");
        var lpass = document.getElementById("lpass");
        if (lemail.value != "") {
            var check = false;
            const userList = yield fetchUsersApi();
            userList.forEach(item => {
                if (item.emailID == lemail.value && item.password == lpass.value) {
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
const showBalanceID = document.getElementById("balance");
const addBalane = document.getElementById("addRecharge");
const tableBody = document.querySelector("#bookTable tbody");
const tableBody1 = document.querySelector("#viewHistory1 tbody");
const tableBody2 = document.querySelector("#returnBook tbody");
const BorrowQtyForm = document.getElementById("BorrowQtyForm");
