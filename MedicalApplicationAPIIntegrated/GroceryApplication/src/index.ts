let CurrentLoggedIn: UserInfo;
// let cardList: OrderDetails;

const signUpMain = document.getElementById("signUpMain") as HTMLDivElement;
const signInMain = document.getElementById("signInMain") as HTMLDivElement;
const loginMain = document.getElementById("loginMain") as HTMLDivElement;
const homeMain = document.getElementById("homeMain") as HTMLDivElement;
const HomePage = document.getElementById("HomePage") as HTMLDivElement;
const ProductPage = document.getElementById("ProductPage") as HTMLDivElement;
const CartPage = document.getElementById("CartPage") as HTMLDivElement;
const CartListPage = document.getElementById("CartListPage") as HTMLDivElement;
const OrderHistoryPage = document.getElementById("OrderHistoryPage") as HTMLDivElement;
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
const tableBody1 = document.querySelector("#CartListTable tbody") as HTMLTableSectionElement;
const tableBody2 = document.querySelector("#OrderHistory tbody") as HTMLTableSectionElement;
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

interface OrderDetails {
    orderID: any,
    bookingID: number,
    productID: number,
    purchaseCount: number,
    priceOfOrder: number
}

interface BookingOrders {
    bookingID: any,
    userID: number,
    totalPrice: number,
    dateOfBooking: Date,
    bookingStatus: string

}

let localCartList: OrderDetails[] = [];
async function AddUserApi(user: UserInfo): Promise<UserInfo> {
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
    return response.json();
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

async function AddBookOrderApi(book: BookingOrders): Promise<BookingOrders> {
    const response = await fetch('http://localhost:5043/api/BookingOrders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    if (!response.ok) {
        throw new Error('ProductDetails Faild');
    }
    return await response.json();
}

async function AddOrderDetailsApi(user: OrderDetails): Promise<void> {
    const response = await fetch('http://localhost:5043/api/OrderDetails', {
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

async function FetchBookingOrderApi(): Promise<BookingOrders[]> {
    const apiUrl = 'http://localhost:5043/api/BookingOrders';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Get Booking Order List Faild');
    }
    return await response.json();
}
async function FetchGetBookingOrderApi(id: number): Promise<BookingOrders> {
    const apiUrl = `http://localhost:5043/api/BookingOrders/${id}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Get Booking Details Faild');
    }
    return await response.json();
}
async function FetchGetOrderDetailsApi(id: number): Promise<OrderDetails> {
    const apiUrl = `http://localhost:5043/api/OrderDetails/${id}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Get Order Details Faild');
    }
    return await response.json();
}

async function FetchOrderDetailsApi(): Promise<OrderDetails[]> {
    const apiUrl = 'http://localhost:5043/api/OrderDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Get Order Details Faild');
    }
    return await response.json();
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

async function FetchGetProductApi(id: number): Promise<ProductDetails> {
    const apiUrl = `http://localhost:5043/api/ProductDetails/${id}`;
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
    OrderHistoryPage.style.display = "none";
}
function loginDisplay() {
    signUpMain.style.display = "none";
    signInMain.style.display = "block";
}
function signUpDisplay() {
    signUpMain.style.display = "block";
    signInMain.style.display = "none";
}
async function SignUpFun() {
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
        const newUser = await AddUserApi(newuser);
        console.log(newUser);
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
    RenderCartList();
}
function OrderHistory() {
    displayNone();
    OrderHistoryPage.style.display = "block";
    RenderOrderHistory();
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
        <img src="${item.productImg[0]}"  border-radius: 10%; style="
        border-radius: 10px;
        text-align: center;
        width: 100%;
        height: 100px;
    ">
        <p>${item.productName}</p>
        <h3>Price: ${item.perPrice}</h3>
        <button onclick="AddToCart(${item.productID})">Add to Cart</button>
        </div>
        `;
    });
}

async function AddToCart(id: number) {
    const productList = await FetchGetProductApi(id);
    const item: OrderDetails = {
        orderID: undefined,
        bookingID: 0,
        productID: productList.productID,
        purchaseCount: 1,
        priceOfOrder: 1 * productList.perPrice
    }
    localCartList.push(item);
    alert("Add to Cart Successfully...!");
    console.log(localCartList);
}

async function RenderCartList() {
    // if (localCartList.length > 0) {
    tableBody1.innerHTML = "";
    localCartList.forEach(async item => {
        const GetProduct = await FetchGetProductApi(item.productID);
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${GetProduct.productImg[0]}" style="height: 80px;width: 80px;"></td>
            <td>${GetProduct.productName}</td>
            <td>${item.purchaseCount}</td>
            <td>${GetProduct.perPrice}</td>
            <td>${item.purchaseCount * GetProduct.perPrice}</td>
            <td>Action</td>
            `;
        tableBody1.appendChild(row);
    });
    // }
}

async function finalBuy() {
    let TotalAmount: number = 0;
    localCartList.forEach(item => {
        TotalAmount += item.priceOfOrder;
    });

    if (TotalAmount <= CurrentLoggedIn.balance) {
        //create order
        const orderBook: BookingOrders =
        {
            bookingID: undefined,
            userID: CurrentLoggedIn.userID,
            totalPrice: TotalAmount,
            dateOfBooking: new Date(),
            bookingStatus: "Ordered"
        };
        const newOrder = await AddBookOrderApi(orderBook);
        console.log(newOrder);
        // ready to cart items
        localCartList.forEach(item => {
            item.bookingID = newOrder.bookingID;
            // const Product = await FetchGetProductApi(item.productID)
        });

        localCartList.forEach(async item => {
            await AddOrderDetailsApi(item);
        });
        localCartList = [];
        RenderCartList();
        alert("Order Successfully...!");
        // update Booking Order

        //Reduce Funcationlity
        CurrentLoggedIn.balance -= TotalAmount;
        UpdateUserApi(CurrentLoggedIn.userID, CurrentLoggedIn);
    }
}

async function RenderOrderHistory() {
    OrderHistoryPage.innerHTML ="";
    let temp: number;
    const BookingList = await FetchBookingOrderApi();

    BookingList.forEach(async booking => {
        if (booking.userID == CurrentLoggedIn.userID) {
            temp = 1;
            if (temp == 1) {
                OrderHistoryPage.innerHTML += `
                <h4>Bill N0: ${booking.bookingID}</h4>
                    <table id="OrderHistory${booking.bookingID}" border="2">
                        <thead>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Per Perice</th>
                            <th>Total Price</th>
                        </thead>
                    </table>
                    <tbody><tbody>
                    <h4>Total Amount: ${booking.totalPrice}</h4>
                `;
                temp = 0;
            }
            const oderDetails = await FetchOrderDetailsApi();
            oderDetails.forEach(async order => {
                if (order.bookingID == booking.bookingID) {

                    var tableBody3 = document.getElementById("OrderHistory" + booking.bookingID) as HTMLSelectElement;
                    const product = await FetchGetProductApi(order.productID);
                    tableBody3.innerHTML += `
                        <tr>
                        <td>${product.productID}</td>
                        <td>${product.productName}</td>
                        <td>${product.perPrice}</td>
                        <td>${order.priceOfOrder}</td>
                        </tr>
                        `;
                }
            });

        }
    });
}
