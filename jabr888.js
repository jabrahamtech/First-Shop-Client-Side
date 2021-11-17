const showHome = () => {
    document.getElementById("home").style.display = "block";
    document.getElementById("Staff").style.display = "none";
    document.getElementById("Shop").style.display = "none";
    document.getElementById("UserReg").style.display = "none";
    document.getElementById("GuestBook").style.display = "none";
    document.getElementById("login").style.display = "none";
}
const showStaff = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("Staff").style.display = "block";
    document.getElementById("Shop").style.display = "none";
    document.getElementById("UserReg").style.display = "none";
    document.getElementById("GuestBook").style.display = "none";
    document.getElementById("login").style.display = "none";
}
const showShop = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("Staff").style.display = "none";
    document.getElementById("Shop").style.display = "block";
    document.getElementById("UserReg").style.display = "none";
    document.getElementById("GuestBook").style.display = "none";
    document.getElementById("login").style.display = "none";
    getItems();
}
const showUserReg = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("Staff").style.display = "none";
    document.getElementById("Shop").style.display = "none";
    document.getElementById("UserReg").style.display = "block";
    document.getElementById("GuestBook").style.display = "none";
    document.getElementById("login").style.display = "none";
}
const showGuestBook = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("Staff").style.display = "none";
    document.getElementById("Shop").style.display = "none";
    document.getElementById("UserReg").style.display = "none";
    document.getElementById("GuestBook").style.display = "block";
    document.getElementById("login").style.display = "none";
}

const showlogin = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("Staff").style.display = "none";
    document.getElementById("Shop").style.display = "none";
    document.getElementById("UserReg").style.display = "none";
    document.getElementById("GuestBook").style.display = "none";
    document.getElementById("login").style.display = "block";
}

const Comment = () => {
    const fetchPromise = fetch("http://localhost:5000/api/WriteComment", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            "comment": document.getElementById("comment").value,
            "name": document.getElementById("name").value
        }),
    })
    .then(() =>
        document.getElementById('comments').src = document.getElementById('comments').src
    );
}

const getItems = () => {
    let input = document.getElementById('productSearch').value;
    const fetchPromise = fetch(`http://localhost:5000/api/GetItems/` + input, {
        headers: {
            "Accept": "application/json",
        },
    });
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((itemData) => searchItem(itemData));
}

const searchItem = (item) => {
    let html = ""
    const searchItem = (item) => {
        html += `<tr><td><img id=productImage src="http://localhost:5000/api/GetItemPhoto/${item.id}"></td><br><br><td>${item.name}<br><br>${item.description}<br><br>${item.price}<br><br> <button onclick="buy(${item.id})">Buy Now</button></td></tr>`
    }
    item.forEach(searchItem);
    const searchTable = document.getElementById("showProducts");
    searchTable.innerHTML = html;

}

const getStaff = () => {
    const fetchPromise = fetch("http://localhost:5000/api/GetAllStaff", {
        headers: {
            "Accept": "text/json",
        },
    });
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((staffData) => showStaff(staffData));
}


const register = () => {
    const fetchPromise = fetch("http://localhost:5000/api​/Register", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            "userName": document.getElementById("UserName").value,
            "password": document.getElementById("Password").value,
            "address": document.getElementById("address").value
        }),
    })
    const streamPromise = fetchPromise.then((response) => response.text());
    streamPromise.then(() =>
        document.getElementById("confirmation").innerHTML = response.text()
    );
}

const buy = (itemid) => {
    const fetchPromise = fetch("http://localhost:5000/api​/PurchaseItem", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            "ProductID": itemid,
            "Quantity": 1
        }),

    })
    .then()
    if(response.status === 201){
        alert("Item added to cart");
    }
    else{
        showlogin();
    }
}

window.onload = showHome; 
