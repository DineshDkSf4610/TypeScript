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
let MedicineIdAutoIncrement = 10;
let UserIdAutoIncrement = 1000;
let OrderIDAutoIncrement = 2000;
let CurrentUserId;
let selectedMedicine;
function AddUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5103/api/Users', {
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
function AddMedicineApi(medicine) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5103/api/MedicineInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(medicine)
        });
        if (!response.ok) {
            throw new Error('Add Medicine Faild');
        }
        alert("Success...!");
        readerDefault();
    });
}
function AddOrdersApi(order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5103/api/OrderDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error('Add User Faild');
        }
        alert("Success...!");
    });
}
function MediciniceUpdate(id, medicine) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5103/api/MedicineInfo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(medicine)
        });
        if (!response.ok) {
            throw new Error('Failed to update medicine');
        }
        readerDefault();
    });
}
function UpdateUserApi(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5103/api/Users/${id}`, {
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
function UpdateOrderApi(id, order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5103/api/OrderDetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error('Failed to update Order');
        }
        CancelListShow();
        // alert("check");
        //   renderContacts();
    });
}
//delete
function DeleteMedicineApi(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5103/api/MedicineInfo/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete contact');
        }
        // renderContacts();
    });
}
//Fetch
function fetchMedicineApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5103/api/MedicineInfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch contacts');
        }
        return yield response.json();
    });
}
function fetchOrdersApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5103/api/OrderDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch orders');
        }
        return yield response.json();
    });
}
function fetchUsersApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5103/api/Users';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return yield response.json();
    });
}
// class User {
//     UserId: string;
//     UserEmail: string;
//     UserPassword: string;
//     UserPhoneNumber: string;
//     Balance: number;
//     constructor(paraUserEmail: string, paraUserPassWord: string, paraUserPhoneNumber: string) {
//         UserIdAutoIncrement++;
//         this.UserId = "UID" + UserIdAutoIncrement;
//         this.UserEmail = paraUserEmail;
//         this.UserPassword = paraUserPassWord;
//         this.UserPhoneNumber = paraUserPhoneNumber;
//         this.Balance = 0;
//     }
// }
// class OrderDetails {
//     OrderId: string;
//     UserID: string;
//     OrderMedicineID: string;
//     OrderMedicineName: string;
//     OrderQuantity: number;
//     OrderDate: Date;
//     TotalPrice: number;
//     OrderStatus: string;
//     constructor(paraOrderMedicineID: string, paraUserID: string, paraOrderMedicineName: string, paraOrderQuantity: number, paraOrderDate: Date, paraOrderPrice: number, paraOrderStatus: string) {
//         OrderIDAutoIncrement++;
//         this.OrderId = "OID" + OrderIDAutoIncrement;
//         this.UserID = paraUserID;
//         this.OrderMedicineID = paraOrderMedicineID;
//         this.OrderMedicineName = paraOrderMedicineName;
//         this.OrderQuantity = paraOrderQuantity;
//         this.OrderDate = paraOrderDate;
//         this.TotalPrice = paraOrderPrice;
//         this.OrderStatus = paraOrderStatus;
//     }
// }
// let UserArrayList: Array<User> = new Array<User>();
// UserArrayList.push(new User("dinesh", "123456", "6384225424"));
// UserArrayList.push(new User("kumar", "123456", "6384225424"));
// let OrdersList: Array<OrderDetails> = new Array<OrderDetails>();
// OrdersList.push(new OrderDetails("MID11", "UID1001", "Paracetomol", 1, new Date(), 2, "Ordered"));
// MedicineList.push(new MedicineInfo("Paracetomol", 2, 50, new Date(2024, 10, 10)));
function signUpValidate() {
    var pass = document.getElementById("password");
    var conPass = document.getElementById("conPass");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    if (pass.value == conPass.value) {
        // UserArrayList.push(new Users(email.value, pass.value, phone.value));
        const user = {
            userID: -1,
            userEmail: "s@gmail.com",
            userPassword: "123456",
            userPhoneNumber: "638422542",
            balance: 0
        };
        AddUser(user);
        // AddUser(user: Users(email.value, pass.value, phone.value))
        alert("Registration Successfully..!");
        // var id = document.getElementById("")
        login();
    }
    else {
        alert("Password mismatch pls check");
    }
}
function displayBalance() {
    ShowBalance();
    showBalanceID.innerHTML = "Show Balance: " + CurrentUserId.balance;
}
function WalletRecharge() {
    return __awaiter(this, void 0, void 0, function* () {
        TopUp();
        CurrentUserId.balance += parseInt(addBalane.value);
        yield UpdateUserApi(CurrentUserId.userID, CurrentUserId);
        alert("Successfully..!");
        addBalane.value = "";
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
function loginValidate() {
    return __awaiter(this, void 0, void 0, function* () {
        var pass = document.getElementById("lpassword");
        var email = document.getElementById("lemail");
        if (email.value != "" && pass.value != "") {
            var check = false;
            const userList = yield fetchUsersApi();
            userList.forEach(item => {
                if (item.userEmail == email.value && item.userPassword == pass.value) {
                    CurrentUserId = item;
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
    });
}
function HomePage() {
    var home = document.getElementById("home");
    var mList = document.getElementById("mList");
    var purchase = document.getElementById("purchase");
    var cancel = document.getElementById("cancel");
    var topup = document.getElementById("topup");
    var balance = document.getElementById("balance");
    var orderHistory = document.getElementById("orderHistory");
    home.style.display = "block";
    mList.style.display = "none";
    purchase.style.display = "none";
    cancel.style.display = "none";
    topup.style.display = "none";
    balance.style.display = "none";
    orderHistory.style.display = "none";
}
function MedicinePage() {
    var home = document.getElementById("home");
    var mList = document.getElementById("mList");
    var purchase = document.getElementById("purchase");
    var cancel = document.getElementById("cancel");
    var topup = document.getElementById("topup");
    var balance = document.getElementById("balance");
    var orderHistory = document.getElementById("orderHistory");
    home.style.display = "none";
    mList.style.display = "block";
    purchase.style.display = "none";
    cancel.style.display = "none";
    topup.style.display = "none";
    balance.style.display = "none";
    orderHistory.style.display = "none";
    // MedicineListShow()
}
function PurchasePage() {
    var home = document.getElementById("home");
    var mList = document.getElementById("mList");
    var purchase = document.getElementById("purchase");
    var cancel = document.getElementById("cancel");
    var topup = document.getElementById("topup");
    var balance = document.getElementById("balance");
    var orderHistory = document.getElementById("orderHistory");
    home.style.display = "none";
    mList.style.display = "none";
    purchase.style.display = "block";
    cancel.style.display = "none";
    topup.style.display = "none";
    balance.style.display = "none";
    orderHistory.style.display = "none";
}
function OrderHistoryPage() {
    var home = document.getElementById("home");
    var mList = document.getElementById("mList");
    var purchase = document.getElementById("purchase");
    var cancel = document.getElementById("cancel");
    var topup = document.getElementById("topup");
    var balance = document.getElementById("balance");
    var orderHistory = document.getElementById("orderHistory");
    home.style.display = "none";
    mList.style.display = "none";
    purchase.style.display = "none";
    cancel.style.display = "none";
    topup.style.display = "none";
    balance.style.display = "none";
    orderHistory.style.display = "block";
}
function CancelPage() {
    var home = document.getElementById("home");
    var mList = document.getElementById("mList");
    var purchase = document.getElementById("purchase");
    var cancel = document.getElementById("cancel");
    var topup = document.getElementById("topup");
    var balance = document.getElementById("balance");
    var orderHistory = document.getElementById("orderHistory");
    home.style.display = "none";
    mList.style.display = "none";
    purchase.style.display = "none";
    cancel.style.display = "block";
    topup.style.display = "none";
    balance.style.display = "none";
    orderHistory.style.display = "none";
}
function CancelListShow() {
    return __awaiter(this, void 0, void 0, function* () {
        CancelPage();
        tableBody4.innerHTML = "";
        const orderList = yield fetchOrdersApi();
        orderList.forEach((item) => {
            if (CurrentUserId.userID == item.userID && item.orderStatus == "Ordered") {
                const row = document.createElement("tr");
                row.innerHTML = `
                <td>${item.orderID}</td>
                <td>${item.orderMedicineName}</td>
                <td>${item.totalPrice / item.orderQuantity}</td>
                <td>${item.orderQuantity}</td>
                <td>${item.totalPrice}</td>
                <td>${item.orderDate.toString().substring(0, 10)}</td>
                <button class="btn" onclick="CancelOrder(${item.orderID})">Cancel</button>
                `;
                tableBody4.appendChild(row);
            }
        });
    });
}
function CancelOrder(id) {
    return __awaiter(this, void 0, void 0, function* () {
        // CancelListShow();
        const OrdersList = yield fetchOrdersApi();
        OrdersList.forEach((item) => __awaiter(this, void 0, void 0, function* () {
            if (item.orderID == id) {
                item.orderStatus = "Cancelled";
                CurrentUserId.balance += item.totalPrice;
                yield UpdateUserApi(CurrentUserId.userID, CurrentUserId);
                yield UpdateOrderApi(item.orderID, item);
                const medicineList = yield fetchMedicineApi();
                medicineList.forEach((item1) => {
                    if (item1.medicineID == item.orderMedicineID) {
                        item1.medicineID += item.orderQuantity;
                        MediciniceUpdate(item1.medicineID, item1);
                        alert("Cancelled Successfully ...!");
                        CancelListShow();
                    }
                });
            }
        }));
    });
}
// function CancelOrder(id: string) {
// CancelListShow();
// MedicineList.forEach((item) => {
//     if (item.MedicineId == orders.OrderMedicineID) {
//         item.MedicineId += orders.OrderQuantity;
//     }
// });
// OrdersList.forEach((item) => {
//     if (item.OrderId == id) {
//         item.OrderStatus = "Cancelled";
//         CurrentUserId.Balance += item.TotalPrice;
//         MedicineList.forEach((item1) => {
//             if (item1.MedicineId == item.OrderMedicineID) {
//                 item1.MedicineId += item.OrderQuantity;
//                 alert("Cancelled Successfully ...!");
//                 CancelListShow();
//             }
//         });
//     }
// });
// }
function TopUp() {
    var home = document.getElementById("home");
    var mList = document.getElementById("mList");
    var purchase = document.getElementById("purchase");
    var cancel = document.getElementById("cancel");
    var topup = document.getElementById("topup");
    var balance = document.getElementById("balance");
    var orderHistory = document.getElementById("orderHistory");
    home.style.display = "none";
    mList.style.display = "none";
    purchase.style.display = "none";
    cancel.style.display = "none";
    topup.style.display = "block";
    balance.style.display = "none";
    orderHistory.style.display = "none";
}
function ShowBalance() {
    var home = document.getElementById("home");
    var mList = document.getElementById("mList");
    var purchase = document.getElementById("purchase");
    var cancel = document.getElementById("cancel");
    var topup = document.getElementById("topup");
    var balance = document.getElementById("balance");
    var orderHistory = document.getElementById("orderHistory");
    home.style.display = "none";
    mList.style.display = "none";
    purchase.style.display = "none";
    cancel.style.display = "none";
    topup.style.display = "none";
    balance.style.display = "block";
    orderHistory.style.display = "none";
}
// class MedicineInfo {
//     MedicineId: string;
//     MedicineName: string;
//     MedicinePrice: number;
//     MedicineQty: number;
//     MedicineExpire: Date;
//     constructor(paramMedicineName: string, paramMedicinePrice: number, paramMedicineQtry: number, paramMedicineExpire: Date) {
//         MedicineIdAutoIncrement++;
//         this.MedicineId = "MID" + MedicineIdAutoIncrement;
//         this.MedicineName = paramMedicineName;
//         this.MedicinePrice = paramMedicinePrice;
//         this.MedicineQty = paramMedicineQtry;
//         this.MedicineExpire = paramMedicineExpire;
//     }
// }
//Store Data
let MedicineList = new Array();
//Add Default Values
// MedicineList.push(new MedicineInfo("Paracetomol", 2, 50, new Date(2024, 10, 10)));
// MedicineList.push(new MedicineInfo("a", 2, 50, new Date(2024, 10, 10)));
const medicineForm = document.getElementById("medicineForm");
const tableBody = document.querySelector("#dataTable tbody");
const tableBody1 = document.querySelector("#ediTable tbody");
const tableBody2 = document.querySelector("#PurchaseTable tbody");
const tableBody3 = document.querySelector("#orderHistory tbody");
const tableBody4 = document.querySelector("#OrderCancel tbody");
const showBalanceID = document.getElementById("balance");
const addBalane = document.getElementById("addRecharge");
const purchaseForm = document.getElementById("purchaseForm");
const purchaseFormOty = document.getElementById("purchaseAddQty");
// medicineForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     MedicinePage();
//     readerDefault();
//     medicineForm.reset();
// });
function readerDefault() {
    return __awaiter(this, void 0, void 0, function* () {
        MedicinePage();
        tableBody.innerHTML = "";
        const MedicineListss = yield fetchMedicineApi();
        MedicineListss.forEach((item) => {
            var date = item.medicineExpire.toString();
            var expireDate = date.substring(0, 10);
            const row = document.createElement("tr");
            row.innerHTML = `
        <td><input class="input-control1" type="text" id="${item.medicineID}e_mName" value="${item.medicineName}" readonly></td>
        <td><input class="input-control1" type="text" id="${item.medicineID}e_mPrice" value="${item.medicinePrice}" readonly></td>
        <td><input class="input-control1" type="text" id="${item.medicineID}e_mQty" value="${item.medicineQty}" readonly></td>
        <td><input class="input-control1" type="date" id="${item.medicineID}e_mExpire" value="${expireDate}" readonly></td>


        <td style="display: flex;">
          <button onclick="edit1(${item.medicineID},'edit')">Edit</button>
          <button onclick="edit1(${item.medicineID},'save')" id="${item.medicineID}e_save" style="display: none; background-color: green;color: white;margin: 0px 5px;">Save</button>
          <button onclick="deleteMedicine(${item.medicineID})">Delete</button>
        </td>
        `;
            // let temp = document.getElementById(item.MedicineId+"e_mExpire") as HTMLInputElement;
            // temp.valueAsDate = item.MedicineExpire;
            tableBody.appendChild(row);
        });
    });
}
// const readerDefault = () => {
// MedicinePage();
// tableBody.innerHTML = "";
// MedicineList.forEach((item) => {
//     var date = item.MedicineExpire.toISOString();
//     var expireDate = date.substring(0, 10);
//     const row = document.createElement("tr");
//     row.innerHTML = `
//     <td><input class="input-control1" type="text" id="${item.MedicineId}e_mName" value="${item.MedicineName}" readonly></td>
//     <td><input class="input-control1" type="text" id="${item.MedicineId}e_mPrice" value="${item.MedicinePrice}" readonly></td>
//     <td><input class="input-control1" type="text" id="${item.MedicineId}e_mQty" value="${item.MedicineQty}" readonly></td>
//     <td><input class="input-control1" type="date" id="${item.MedicineId}e_mExpire" value="${expireDate}" readonly></td>
//     <td style="display: flex;">
//       <button onclick="edit1('${item.MedicineId}','edit')">Edit</button>
//       <button onclick="edit1('${item.MedicineId}','save')" id="${item.MedicineId}e_save" style="display: none; background-color: green;color: white;margin: 0px 5px;">Save</button>
//       <button onclick="deleteMedicine('${item.MedicineId}')">Delete</button>
//     </td>
//     `;
//     // let temp = document.getElementById(item.MedicineId+"e_mExpire") as HTMLInputElement;
//     // temp.valueAsDate = item.MedicineExpire;
//     tableBody.appendChild(row);
// });
// }
function renderPurchase() {
    return __awaiter(this, void 0, void 0, function* () {
        PurchasePage();
        tableBody2.innerHTML = "";
        const MedicineList = yield fetchMedicineApi();
        MedicineList.forEach((item) => {
            if (item.medicineExpire.toString().substring(0, 10) > new Date().toISOString().substring(0, 10) && item.medicineQty > 0) {
                var date = item.medicineExpire.toString();
                var expireDate = date.substring(0, 10);
                const row = document.createElement("tr");
                row.innerHTML = `
                <td><input class="input-control1" type="text" id="${item.medicineID}e_mName" value="${item.medicineName}" readonly></td>
                <td><input class="input-control1" type="text" id="${item.medicineID}e_mPrice" value="${item.medicinePrice}" readonly></td>
                <td><input class="input-control1" type="text" id="${item.medicineID}e_mQty" value="${item.medicineQty}" readonly></td>
                <td><input class="input-control1" type="date" id="${item.medicineID}e_mExpire" value="${expireDate}" readonly></td>

                <td style="">
                  <button class="btn" onclick="showQuyForm(${item.medicineID})">To BUY</button><br><br>
                </td>
                `;
                tableBody2.appendChild(row);
            }
        });
    });
}
// const renderPurchase = () => {
// PurchasePage();
// tableBody2.innerHTML = "";
// MedicineList.forEach((item) => {
//     if (item.MedicineExpire > new Date() && item.MedicineQty > 0) {
//         var date = item.MedicineExpire.toISOString();
//         var expireDate = date.substring(0, 10);
//         const row = document.createElement("tr");
//         row.innerHTML = `
//             <td><input class="input-control1" type="text" id="${item.MedicineId}e_mName" value="${item.MedicineName}" readonly></td>
//             <td><input class="input-control1" type="text" id="${item.MedicineId}e_mPrice" value="${item.MedicinePrice}" readonly></td>
//             <td><input class="input-control1" type="text" id="${item.MedicineId}e_mQty" value="${item.MedicineQty}" readonly></td>
//             <td><input class="input-control1" type="date" id="${item.MedicineId}e_mExpire" value="${expireDate}" readonly></td>
//             <td style="">
//               <button class="btn" onclick="showQuyForm('${item.MedicineId}')">To BUY</button><br><br>
//             </td>
//             `;
//         tableBody2.appendChild(row);
//     }
// });
// }
function showQuyForm(id) {
    return __awaiter(this, void 0, void 0, function* () {
        purchaseForm.style.display = "block";
        const medicineList = yield fetchMedicineApi();
        medicineList.forEach((item) => {
            if (item.medicineID == id) {
                selectedMedicine = item;
            }
        });
    });
}
// <input class="input-control" type="text" id="${item.MedicineId}e_purchaseQty" placeholder="Enter Qty"><br><br>
// <button class="btn" onclick="">To PURCHASE</button>
function addPurchase() {
    let totalAmount = parseInt(purchaseFormOty.value) * selectedMedicine.medicinePrice;
    if (parseInt(purchaseFormOty.value) > selectedMedicine.medicineQty) {
        alert("Quantitu Not Available..!");
    }
    else if (totalAmount >= CurrentUserId.balance) {
        alert("Sorry Insufficient Balance..!");
    }
    else {
        CurrentUserId.balance -= totalAmount;
        UpdateUserApi(CurrentUserId.userID, CurrentUserId);
        selectedMedicine.medicineQty -= parseInt(purchaseFormOty.value);
        MediciniceUpdate(selectedMedicine.medicineID, selectedMedicine);
        // OrdersList.push(new OrderDetails(selectedMedicine.MedicineId, CurrentUserId.UserId, selectedMedicine.MedicineName, parseInt(purchaseFormOty.value), new Date(), totalAmount, "Ordered"));
        const order = {
            orderID: -1,
            userID: CurrentUserId.userID,
            orderMedicineID: selectedMedicine.medicineID,
            orderMedicineName: selectedMedicine.medicineName,
            orderQuantity: parseInt(purchaseFormOty.value),
            orderDate: new Date(),
            totalPrice: totalAmount,
            orderStatus: "Ordered"
        };
        AddOrdersApi(order);
        // purchaseForm.style.display = "none";
        // purchaseForm.reset();
    }
    return false;
}
function renderOrderHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        OrderHistoryPage();
        tableBody3.innerHTML = "";
        const OrdersList = yield fetchOrdersApi();
        OrdersList.forEach((item) => {
            if (CurrentUserId.userID == item.userID) {
                const row = document.createElement("tr");
                row.innerHTML = `
                <td>${item.orderID}</td>
                <td>${item.orderMedicineName}</td>
                <td>${item.totalPrice / item.orderQuantity}</td>
                <td>${item.orderQuantity}</td>
                <td>${item.totalPrice}</td>
                <td>${item.orderDate.toString().substring(0, 10)}</td>
                <td>${item.orderStatus}</td>
                `;
                tableBody3.appendChild(row);
            }
        });
    });
}
// const renderOrderHistory = () => {
// OrderHistoryPage();
// tableBody3.innerHTML = "";
// OrdersList.forEach((item) => {
//     if (CurrentUserId.UserId == item.UserID) {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//             <td>${item.OrderId}</td>
//             <td>${item.OrderMedicineName}</td>
//             <td>${item.TotalPrice / item.OrderQuantity}</td>
//             <td>${item.OrderQuantity}</td>
//             <td>${item.TotalPrice}</td>
//             <td>${item.OrderDate.toLocaleDateString()}</td>
//             <td>${item.OrderStatus}</td>
//             `;
//         tableBody3.appendChild(row);
//     }
// });
// }
// <td>${item.MedicinePrice}</td>
// <td>${item.MedicineQty}</td>    
// <td>${item.MedicineExpire.toLocaleDateString()}</td>
// <button onclick="edit('${item.MedicineId}')">Edit</button>
function edit1(id, type) {
    return __awaiter(this, void 0, void 0, function* () {
        var e_mName = document.getElementById(id + "e_mName");
        var e_mPrice = document.getElementById(id + "e_mPrice");
        var e_mQty = document.getElementById(id + "e_mQty");
        var e_mExpire = document.getElementById(id + "e_mExpire");
        var e_save = document.getElementById(id + "e_save");
        style("e_mName", id);
        style("e_mPrice", id);
        style("e_mQty", id);
        style("e_mExpire", id);
        e_save.style.display = "block";
        if (type == "save") {
            const MedicineList = yield fetchMedicineApi();
            MedicineList.forEach((item) => {
                if (item.medicineID == id) {
                    item.medicineName = e_mName.value;
                    item.medicinePrice = parseInt(e_mPrice.value);
                    item.medicineQty = parseInt(e_mQty.value);
                    MediciniceUpdate(item.medicineID, item);
                }
            });
            style1("e_mName", id);
            style1("e_mPrice", id);
            style1("e_mQty", id);
            style1("e_mExpire", id);
            e_save.style.display = "none";
        }
        //    e_mName.style.border = "block";
        //    e_mName.style.outline = "block";
        //    e_mName.style.border = "2px solid green";
        //    e_mName.readOnly = false;
        //    e_mName.style.width = "100%";
    });
}
function style(define, id) {
    var define1 = document.getElementById(id + define);
    define1.style.border = "block";
    define1.style.outline = "block";
    define1.style.border = "2px solid green";
    define1.readOnly = false;
    define1.style.width = "100%";
}
function style1(define, id) {
    var define1 = document.getElementById(id + define);
    define1.style.border = "none";
    define1.style.outline = "none";
    // define1.style.border = "2px solid green";
    define1.readOnly = true;
    // define1.style.width = "100%";
}
function AddMedicine() {
    addMedicineForm.style.display = "block";
    if (mName.value != "" && a_mExpire.value != "" && a_mQty.value != "" && a_mPrice.value != "") {
        const medicine = {
            medicineID: -1,
            medicineName: mName.value,
            medicinePrice: parseInt(a_mPrice.value),
            medicineQty: parseInt(a_mQty.value),
            medicineExpire: new Date(a_mExpire.value)
        };
        AddMedicineApi(medicine);
        // MedicineList.push(new MedicineInfo(mName.value, parseInt(a_mPrice.value), parseInt(a_mQty.value), new Date(a_mExpire.value)));
        // readerDefault();
    }
    mName.value = "";
    a_mPrice.value = "";
    a_mQty.value = "";
    a_mExpire.value = "";
}
function edit(id) {
    // const item = MedicineList.find((item) => item.MedicineId = id);
    // if (item) {
    //     tableBody1.innerHTML = "";
    //     const row = document.createElement("tr");
    //     row.innerHTML = `
    //     <td><input class="input-control" type="text" id="${item.MedicineId}e_mName" value="${item.MedicineName}"></td>
    //     <td><input class="input-control" type="text" id="${item.MedicineId}e_mPrice" value="${item.MedicinePrice}" ></td>
    //     <td><input class="input-control" type="text" id="${item.MedicineId}e_mQty" value="${item.MedicineQty}"></td>
    //     <td><input class="input-control" type="date" id="${item.MedicineId}e_mExpire" value="${item.MedicineExpire}"></td>
    //     <td>
    //       <button onclick="">Save</button>
    //     </td>
    //     `;
    //     tableBody1.appendChild(row);
    // }
}
function deleteMedicine(id) {
    return __awaiter(this, void 0, void 0, function* () {
        // MedicineList = MedicineList.filter((item) => item.MedicineId !== id);
        yield DeleteMedicineApi(id);
        readerDefault();
    });
}
function editSave(id) {
}
// const edit = (id: number) => {
//     Med = id;
//     const item = data.find((item) => item.id === id);
//     if (item) {
//       nameInput.value = item.name;
//       ageInput.value = String(item.age);
//     }
//   };
const addMedicineForm = document.getElementById("addMedicineForm");
const mName = document.getElementById("a_mName");
const a_mPrice = document.getElementById("a_mPrice");
const a_mQty = document.getElementById("a_mQty");
const a_mExpire = document.getElementById("a_mExpire");
// const addMedicineForm = document.getElementById("addMedicineForm") as HTMLDivElement;
const eName = document.getElementById("e_mName");
const e_mPrice = document.getElementById("e_mPrice");
const e_mQty = document.getElementById("e_mQty");
const e_mExpire = document.getElementById("e_mExpire");
