let CurrentLoggedIn: UserInfo;

const signUpMain = document.getElementById("signUpMain") as HTMLDivElement;
const signInMain = document.getElementById("signInMain") as HTMLDivElement;
const loginMain = document.getElementById("loginMain") as HTMLDivElement;
const homeMain = document.getElementById("homeMain") as HTMLDivElement;
const HomePage = document.getElementById("HomePage") as HTMLDivElement;
const ProductPage = document.getElementById("ProductPage") as HTMLDivElement;
const CartPage = document.getElementById("CartPage") as HTMLDivElement;
const CartListPage = document.getElementById("CartListPage") as HTMLDivElement;
const RechargePage = document.getElementById("RechargePage") as HTMLDivElement;
const ShowBalancePage = document.getElementById("ShowBalancePage") as HTMLDivElement;
const Uname = document.getElementById("Uname") as HTMLInputElement;
const Uemail = document.getElementById("Uemail") as HTMLInputElement;
const Uphone = document.getElementById("Uphone") as HTMLInputElement;
const Upass = document.getElementById("Upass") as HTMLInputElement;
const Uconpass = document.getElementById("Uconpass") as HTMLInputElement;
const Lemail = document.getElementById("Lemail") as HTMLInputElement;
const Lpass = document.getElementById("Lpass") as HTMLInputElement;
const RechargeAmt = document.getElementById("RechargeAmt") as HTMLInputElement;
const ProductName = document.getElementById("ProductName") as HTMLInputElement;
const ProductQty = document.getElementById("ProductQty") as HTMLInputElement;
const ProductPrice = document.getElementById("ProductPrice") as HTMLInputElement;
const ProductExpireDate = document.getElementById("ProductExpireDate") as HTMLInputElement;
const ProductImage = document.getElementById("ProductImage") as HTMLInputElement;
const AddProductForm = document.getElementById("AddProductForm") as HTMLFormElement;
const tableBody = document.querySelector("#ProductTable tbody") as HTMLTableSectionElement;
const cartMain = document.getElementById("cartMain") as HTMLDivElement;


interface UserInfo {
    userID: any,
    userName: string,
    userEmailID: string,
    phoneNumber: string,
    passWord: string,
    balance: number
}

interface ProductDetails {
    productID: any,
    productName: string,
    availableQty: number,
    perPrice: number,
    expireDate: Date,
    productImg: string[],
    purchaseDate: Date
}

async function AddUserApi(user: UserInfo): Promise<void> {
    const response = await fetch('http://localhost:5043/api/UserInfo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Add User Faild');
    }
}

async function AddProductApi(user: ProductDetails): Promise<void> {
    const response = await fetch('http://localhost:5043/api/ProductDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('ProductDetails Faild');
    }
}

async function FetchUsersApi(): Promise<UserInfo[]> {
    const apiUrl = 'http://localhost:5043/api/UserInfo';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Get Users List Faild');
    }
    return await response.json();
}
async function FetchProductApi(): Promise<ProductDetails[]> {
    const apiUrl = 'http://localhost:5043/api/ProductDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Get ProductDetails Faild');
    }
    return await response.json();
}
async function UpdateUserApi(id: number, user: UserInfo): Promise<void> {
    const response = await fetch(`http://localhost:5043/api/UserInfo/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Failed to update user');
    }
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
    } else {
        const newuser: UserInfo = {
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
async function SignInFun() {
    let check: any;
    const userList = await FetchUsersApi();
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

function RechargeBtn(type: string) {
    displayNone();
    RechargePage.style.display = "block";
    if (type == "click") {
        if (RechargeAmt.value != "") {
            CurrentLoggedIn.balance += parseInt(RechargeAmt.value)
            UpdateUserApi(CurrentLoggedIn.userID, CurrentLoggedIn);
            alert("Recharge Successfully...!");
            RechargeAmt.value = "";
        } else {
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

async function AddProductFun() {
    const file = ProductImage.files?.[0];
    let base64String: any = "";
    if (file) {
        var reader = new FileReader();
        reader.onload = function (event) {
            base64String = event.target?.result;
            //validation pending
            const addProduct: ProductDetails =
            {
                productID: undefined,
                productName: ProductName.value,
                availableQty: parseInt(ProductQty.value),
                perPrice: Number(ProductPrice.value),
                expireDate: new Date(ProductExpireDate.value),
                productImg: [base64String],
                purchaseDate: new Date()
            }
            console.log(addProduct);
            AddProductApi(addProduct);
            AddProductForm.reset();
            alert("Product Added Successfully...!");

        };
        reader.readAsDataURL(file);
    }

    return false;
}

async function ReanderProductData() {
    const productList = await FetchProductApi();
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
}

async function RenderCartBoxList() {
    const productList = await FetchProductApi();
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
}

