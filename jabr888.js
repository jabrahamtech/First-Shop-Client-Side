const showHome = () => {
    document.getElementById("home").style.display = "block";
    document.getElementById("Staff").style.display = "none";
    document.getElementById("Shop").style.display = "none";
    document.getElementById("UserReg").style.display = "none";
    document.getElementById("GuestBook").style.display = "none";
}
const showStaff = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("Staff").style.display = "block";
    document.getElementById("Shop").style.display = "none";
    document.getElementById("UserReg").style.display = "none";
    document.getElementById("GuestBook").style.display = "none";
}
const showShop = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("Staff").style.display = "none";
    document.getElementById("Shop").style.display = "block";
    document.getElementById("UserReg").style.display = "none";
    document.getElementById("GuestBook").style.display = "none";
}
const showUserReg = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("Staff").style.display = "none";
    document.getElementById("Shop").style.display = "none";
    document.getElementById("UserReg").style.display = "block";
    document.getElementById("GuestBook").style.display = "none";
}
const showGuestBook = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("Staff").style.display = "none";
    document.getElementById("Shop").style.display = "none";
    document.getElementById("UserReg").style.display = "none";
    document.getElementById("GuestBook").style.display = "block";
}

window.onload = showHome;