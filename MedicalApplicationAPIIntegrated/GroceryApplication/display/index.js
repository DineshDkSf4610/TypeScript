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
let CurrentLoggedIn;
const signUpMain = document.getElementById("signUpMain");
const signInMain = document.getElementById("signInMain");
const loginMain = document.getElementById("loginMain");
const homeMain = document.getElementById("homeMain");
const HomePage = document.getElementById("HomePage");
const ProductPage = document.getElementById("ProductPage");
const CartPage = document.getElementById("CartPage");
const CartListPage = document.getElementById("CartListPage");
const RechargePage = document.getElementById("RechargePage");
const ShowBalancePage = document.getElementById("ShowBalancePage");
const Uname = document.getElementById("Uname");
const Uemail = document.getElementById("Uemail");
const Uphone = document.getElementById("Uphone");
const Upass = document.getElementById("Upass");
const Uconpass = document.getElementById("Uconpass");
const Lemail = document.getElementById("Lemail");
const Lpass = document.getElementById("Lpass");
const RechargeAmt = document.getElementById("RechargeAmt");
const ProductName = document.getElementById("ProductName");
const ProductQty = document.getElementById("ProductQty");
const ProductPrice = document.getElementById("ProductPrice");
const ProductExpireDate = document.getElementById("ProductExpireDate");
const ProductImage = document.getElementById("ProductImage");
const AddProductForm = document.getElementById("AddProductForm");
const tableBody = document.querySelector("#ProductTable tbody");
const cartMain = document.getElementById("cartMain");
function AddUserApi(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5043/api/UserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Add User Faild');
        }
    });
}
function AddProductApi(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5043/api/ProductDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('ProductDetails Faild');
        }
    });
}
function FetchUsersApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5043/api/UserInfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Get Users List Faild');
        }
        return yield response.json();
    });
}
function FetchProductApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5043/api/ProductDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Get ProductDetails Faild');
        }
        return yield response.json();
    });
}
function UpdateUserApi(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5043/api/UserInfo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to update user');
        }
    });
}
function displayNone() {
    HomePage.style.display = "none";
    ProductPage.style.display = "none";
    CartPage.style.display = "none";
    CartListPage.style.display = "none";
    RechargePage.style.display = "none";
    ShowBalancePage.style.display = "none";
}
function loginDisplay() {
    signUpMain.style.display = "none";
    signInMain.style.display = "block";
}
function signUpDisplay() {
    signUpMain.style.display = "block";
    signInMain.style.display = "none";
}
function SignUpFun() {
    if (Upass.value != Uconpass.value || Upass.value == '') {
        alert("Mismatch password please check ..!");
    }
    else {
        const newuser = {
            userID: undefined,
            userName: Uname.value,
            userEmailID: Uemail.value,
            phoneNumber: Uphone.value,
            passWord: Upass.value,
            balance: 0
        };
        AddUserApi(newuser);
        alert("Registration Successfully...!");
        loginDisplay();
    }
}
function SignInFun() {
    return __awaiter(this, void 0, void 0, function* () {
        let check;
        const userList = yield FetchUsersApi();
        console.log(userList);
        if (Lemail.value != "" && Lpass.value != "") {
            userList.forEach(user => {
                if (user.userEmailID == Lemail.value && user.passWord == Lpass.value) {
                    check = true;
                    CurrentLoggedIn = user;
                    loginMain.style.display = "none";
                    homeMain.style.display = "block";
                    displayNone();
                    HomeBtn();
                    HomePage.style.display = "block";
                }
            });
        }
        if (check == null) {
            alert("Invalid Input Please Check..!");
        }
    });
}
function HomeBtn() {
    displayNone();
    HomePage.style.display = "block";
    HomePage.innerHTML = `<h2 style="text-align: center;margin-top: 20%;">Welcome ${CurrentLoggedIn.userName}</h2>`;
}
function ProductBtn() {
    displayNone();
    ProductPage.style.display = "block";
    ReanderProductData();
}
function ViewCartBtn() {
    displayNone();
    CartPage.style.display = "block";
    RenderCartBoxList();
}
function CartListBtn() {
    displayNone();
    CartListPage.style.display = "block";
}
function RechargeBtn(type) {
    displayNone();
    RechargePage.style.display = "block";
    if (type == "click") {
        if (RechargeAmt.value != "") {
            CurrentLoggedIn.balance += parseInt(RechargeAmt.value);
            UpdateUserApi(CurrentLoggedIn.userID, CurrentLoggedIn);
            alert("Recharge Successfully...!");
            RechargeAmt.value = "";
        }
        else {
            alert("Please Enter Amount");
        }
    }
}
function ShowBalanceBtn() {
    displayNone();
    ShowBalancePage.style.display = "block";
    ShowBalancePage.innerHTML = `<h2 style="text-align: center;margin-top: 20%;">Balance: ${CurrentLoggedIn.balance}</h2>`;
}
function LogoutBtn() {
    displayNone();
    loginMain.style.display = "block";
    homeMain.style.display = "none";
}
function AddProductFun() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const file = (_a = ProductImage.files) === null || _a === void 0 ? void 0 : _a[0];
        let base64String = "";
        if (file) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var _a;
                base64String = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                //validation pending
                const addProduct = {
                    productID: undefined,
                    productName: ProductName.value,
                    availableQty: parseInt(ProductQty.value),
                    perPrice: Number(ProductPrice.value),
                    expireDate: new Date(ProductExpireDate.value),
                    productImg: [base64String],
                    purchaseDate: new Date()
                };
                console.log(addProduct);
                AddProductApi(addProduct);
                AddProductForm.reset();
                alert("Product Added Successfully...!");
            };
            reader.readAsDataURL(file);
        }
        return false;
    });
}
function ReanderProductData() {
    return __awaiter(this, void 0, void 0, function* () {
        const productList = yield FetchProductApi();
        tableBody.innerHTML = "";
        productList.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td><img src="${item.productImg[0]}" style="height: 80px;width: 80px;"></td>
        <td>${item.productName}</td>
        <td>${item.availableQty}</td>
        <td>${item.perPrice}</td>
        <td>${item.expireDate}</td>
        <td>${item.productName}</td>
        `;
            tableBody.appendChild(row);
        });
    });
}
function RenderCartBoxList() {
    return __awaiter(this, void 0, void 0, function* () {
        const productList = yield FetchProductApi();
        cartMain.innerHTML = '';
        productList.forEach(item => {
            cartMain.innerHTML += `
        <div class="cartBox" id="cartBox">
        <img src="${item.productImg[0]}" width="100%" height="300px;">
        <p>${item.productName}</p>
        <h3>Price: ${item.perPrice}</h3>
        <button>Add to Cart</button>
        </div>
        `;
        });
    });
}
