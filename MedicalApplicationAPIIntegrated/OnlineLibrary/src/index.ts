let CurrentUserId: UserInfo;
let SelectedBook: BookDetails;
interface UserInfo {
    userID: any,
    userName: string,
    gender: string,
    department: string,
    mobileNumber: string,
    emailID: string,
    password: string,
    balance: number
}

interface BorrowDetails {
    borrowID: any,
    bookID: number,
    userID: number,
    borrowedDate: string,
    borrowBookCount: number,
    status: string,
    paidFineAmount: number
}

interface BookDetails {
    bookID: any,
    bookName: string,
    authorName: string,
    bookCount: number
}

//Api Integration
async function AddUser(user: UserInfo): Promise<void> {
    const response = await fetch('http://localhost:5152/api/UserInfo', {
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
}

async function fetchUsersApi(): Promise<UserInfo[]> {
    const apiUrl = 'http://localhost:5152/api/UserInfo';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return await response.json();
}
async function UpdateUserApi(id: number, user: UserInfo): Promise<void> {
    const response = await fetch(`http://localhost:5152/api/UserInfo/${id}`, {
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
}
async function UpdateBookApi(id: number, user: BookDetails): Promise<void> {
    const response = await fetch(`http://localhost:5152/api/BookDetails/${id}`, {
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
}
async function UpdateBorrowBookApi(id: number, user: BorrowDetails): Promise<void> {
    const response = await fetch(`http://localhost:5152/api/BorrowDetails/${id}`, {
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
}
async function fetchBookListApi(): Promise<BookDetails[]> {
    const apiUrl = 'http://localhost:5152/api/BookDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return await response.json();
}

async function fetchBorrowListApi(): Promise<BorrowDetails[]> {
    const apiUrl = 'http://localhost:5152/api/BorrowDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return await response.json();
}

async function fetchBookApi(id: number): Promise<BookDetails> {
    const apiUrl = `http://localhost:5152/api/BookDetails/${id}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return await response.json();
}
async function fetchBorrowApi(id: number): Promise<BorrowDetails> {
    const apiUrl = `http://localhost:5152/api/BorrowDetails/${id}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return await response.json();
}

async function AddBorrowDetails(user: BorrowDetails): Promise<void> {
    const response = await fetch('http://localhost:5152/api/BorrowDetails', {
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
}


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
function HomePage() {
    displayBlock();
    var home = document.getElementById("home") as HTMLInputElement;
    home.innerHTML = "Welcome " + CurrentUserId.userName;
    home.style.display = "block";
}
function logout() {
    var main = document.getElementById("main") as HTMLDivElement;
    var loginMain = document.getElementById("loginMain") as HTMLDivElement;
    main.style.display = "none";
    loginMain.style.display = "block";
}
function displayBlock() {
    var home = document.getElementById("home") as HTMLDivElement;
    var bookTravel = document.getElementById("bookTravel") as HTMLDivElement;
    var viewHistory = document.getElementById("viewHistory") as HTMLDivElement;
    var topup = document.getElementById("topup") as HTMLDivElement;
    var balance = document.getElementById("balance") as HTMLDivElement;
    var returnBook = document.getElementById("returnBook1") as HTMLDivElement;
    returnBook.style.display = "none";

    home.style.display = "none";
    bookTravel.style.display = "none";
    viewHistory.style.display = "none";
    topup.style.display = "none";
    balance.style.display = "none";
}
function topup() {
    displayBlock();
    var topup = document.getElementById("topup") as HTMLDivElement;
    topup.style.display = "block";
}
function BorrowBook() {
    displayBlock();
    var bookTravel = document.getElementById("bookTravel") as HTMLDivElement;
    bookTravel.style.display = "block";
    BorrowQtyForm.style.display = "none";
    renderBookList();
}
function signUpValidate() {
    var uName = document.getElementById("userName") as HTMLInputElement;
    var email = document.getElementById("emaiID") as HTMLInputElement;
    var passWord = document.getElementById("password") as HTMLInputElement;
    var phoneNum = document.getElementById("phoneNum") as HTMLInputElement;
    var gender = document.getElementById("gender") as HTMLInputElement;
    var department = document.getElementById("department") as HTMLInputElement;

    if (email.value != "" && phoneNum.value != "") {
        const user: UserInfo = {
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
    } else {
        alert("Invalid Input pls check");
    }
}
function showBlance() {
    displayBlock();
    var balance = document.getElementById("balance") as HTMLDivElement;
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
    var viewHistory = document.getElementById("viewHistory") as HTMLDivElement;
    viewHistory.style.display = "block";
    BorrowHistoryList();
}
function ReturnBook() {
    displayBlock();
    var returnBook = document.getElementById("returnBook1") as HTMLDivElement;
    returnBook.style.display = "block";
    // BorrowHistoryList();
    RenderReturnList();
}

async function RenderReturnList() {
    const borrowList = await fetchBorrowListApi();
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
}

async function returnBorrowBook(id: number) {

    const borrowBook = await fetchBorrowApi(id);
    const returnDate = new Date(borrowBook.borrowedDate)
    const countDate = Math.abs(returnDate.getDate() - new Date().getDate())
    const book = await fetchBookApi(borrowBook.bookID);
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
        } else {
            alert("Insufficient Balance...!");
        }

    } else {
        borrowBook.status = "Returned";
        UpdateBorrowBookApi(borrowBook.borrowID, borrowBook);
        UpdateBookApi(book.bookID, book);
        alert("Returned Successfully....!");
        RenderReturnList();
        //fine zero
    }
}

async function BorrowHistoryList() {
    const borrowList = await fetchBorrowListApi();
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

}
async function renderBookList() {
    tableBody.innerHTML = "";
    const ticketList = await fetchBookListApi();
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
}
async function BorrowBookFun1(id: number) {
    BorrowQtyForm.style.display = "block";
    const book = await fetchBookApi(id);
    SelectedBook = book;
}
async function BorrowBookFun() {
    var purchaseAddQty = document.getElementById("purchaseAddQty") as HTMLInputElement;

    if (purchaseAddQty.value != "") {
        const book = SelectedBook;
        if (book.bookCount > 0) {
            book.bookCount -= 1;
            const addBorrow: BorrowDetails = {
                borrowID: undefined,
                bookID: book.bookID,
                userID: CurrentUserId.userID,
                borrowedDate: new Date().toISOString().substring(0, 10),
                borrowBookCount: parseInt(purchaseAddQty.value),
                status: "Borrowed",
                paidFineAmount: 0
            }
            var alreadyBookCount = 0;
            const borrowList = await fetchBorrowListApi();
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
            } else {
                alert("You can have maximum of 3 borrowed books. Your already borrowed books count is " + alreadyBookCount + " and requested count is " + purchaseAddQty.value + ", which exceeds 3.");
            }

        } else {
            alert("Not Available Book...!");
        }
    } else {
        alert("Please Enter a Quantity");
    }
}

async function loginValidate() {
    var lemail = document.getElementById("lemail") as HTMLInputElement;
    var lpass = document.getElementById("lpass") as HTMLInputElement;
    if (lemail.value != "") {
        var check = false;
        const userList = await fetchUsersApi();
        userList.forEach(item => {
            if (item.emailID == lemail.value && item.password == lpass.value) {
                CurrentUserId = item;
                check = true;
                HomePage();
            }
        });
        if (check) {
            alert("Success" + lemail.value);
            var id = document.getElementById("loginMain") as HTMLDivElement;
            var main = document.getElementById("main") as HTMLDivElement;
            id.style.display = "none";
            main.style.display = "block";
        } else {
            alert("Invalid EmailID or PassWord..!");
        }
    } else {
        alert("Invalid UserName pls check");
    }
}

const showBalanceID = document.getElementById("balance") as HTMLDivElement;
const addBalane = document.getElementById("addRecharge") as HTMLInputElement;
const tableBody = document.querySelector("#bookTable tbody") as HTMLTableSectionElement;
const tableBody1 = document.querySelector("#viewHistory1 tbody") as HTMLTableSectionElement;
const tableBody2 = document.querySelector("#returnBook tbody") as HTMLTableSectionElement;
const BorrowQtyForm = document.getElementById("BorrowQtyForm") as HTMLFormElement;

