let mainH2 = document.querySelector(".header h2");
mainH2.style.cssText = "cursor: pointer";

mainH2.onclick = function () {
    window.location.reload()
}

let Mbutton = document.querySelector(".header button");
let MbuttonSide = document.querySelector(".sidebar .componntBtn");
let contact = document.querySelector(".contact");
let page = document.querySelector(".page");
let toUp = document.querySelector(".to-up");
let arrow = document.querySelector(".to-up i");
let bars = document.querySelector(".header .bars");
let sidebar = document.querySelector(".sidebar");
let exitSide = document.querySelector(".sidebar ul i");

bars.onclick = function () {
    if (sidebar.style.cssText = "top: 96px; left: 0; height: 90%; transition: var(--trasition); opacity: 0") {
        sidebar.style.cssText = "top: 96px; left: 0; height: 90%; transition: var(--trasition); opacity: 1;"
    }
    bars.style.cssText = "color: rgb(246, 117, 94); opacity: 1;"
}
exitSide.onclick = function() {
    sidebar.style.cssText = "opacity: 0;"
    bars.style.cssText = "opacity: 0.3;"
}


Mbutton.onclick = function () {
    page.style.cssText = "opacity: 0.3;"
    contact.style.cssText = "visibility: visible; animation: done 1s alternate;";
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
    submit.style.cssText = "transition: var(--trasition);"
    reset.style.cssText = "transition: var(--trasition);"
}
MbuttonSide.onclick = function () {
    page.style.cssText = "opacity: 0.3;"
    contact.style.cssText = "visibility: visible; animation: done 1s alternate;";
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
    submit.style.cssText = "transition: var(--trasition);"
    reset.style.cssText = "transition: var(--trasition);"
}

let exit = document.querySelector(".contact i");

exit.onclick = function () {
    page.style.cssText = "opacity: 1;"
    contact.style.cssText = "visibility: hidden;";
    arrow.style.cssText = "animation: go-up 0.5s infinite alternate;"
    submit.style.cssText = "transition: none;"
    reset.style.cssText = "transition: none;"
    alarm.style.cssText = "transition: 0s;";
    alartControl.style.cssText = "display: none;"
    window.location.reload()
}


// let linkUs = document.querySelector(".banner a").onclick = function () {
//     window.scrollTo ({
//         top: 700,
//         left: 0,
//         behavior: "smooth"
//     });
// }

// let wrapper = document.querySelector(".wrapper")
// let row = document.querySelector(".wrapper .row")
// let Feugiat = document.querySelector(".Feugiat");
// let container = document.querySelector(".Feugiat .container")
// let info = document.querySelector(".info");
// let row1 = document.querySelector(".info .row")
// let footer = document.querySelector(".footer");
// let container1 = document.querySelector(".footer .container")
// let last = document.querySelector(".last");

// window.onscroll = function () {
//     if (window.scrollY >= wrapper.offsetTop - 700) {
//         row.style.cssText = "opacity: 1;"
//     }
//     if (window.scrollY >= Feugiat.offsetTop - 800) {
//         container.style.cssText = "opacity: 1;"
//     }
//     if (window.scrollY >= info.offsetTop - 800) {
//         row1.style.cssText = "opacity: 1;"
//     }
//     if (window.scrollY >= footer.offsetTop - 800) {
//         container1.style.cssText = "opacity: 1;"
//     }
//     if (window.scrollY >= footer.offsetTop - 800) {
//         last.style.cssText = "opacity: 1;"
//     }
//     if (window.scrollY >= 950) {
//         toUp.style.cssText = "display: block; animation: done 1s alternate;"
//     } else {
//         toUp.style.cssText = "display: none;"
//     }
// }
// forms 

let submit = document.querySelector("form .submit");
document.getElementById("form").onsubmit = function () {
    let user = document.querySelector("form .user").value;
    let password = document.querySelector("form .password").value;
    let email = document.querySelector("form .email").value;
    let userRe = /\w+-?\w+\d+/ig; // Moustafa-fikry999
    let validationresultUser = userRe.test(user);
    console.log(validationresultUser);
    if (validationresultUser === false) {
        return false;
    } else if (validationresultUser === true) {
        window.localStorage.setItem("User", user);
    }
    let passwordRe = /(\w+)?\d{8}(\w+)?/ig // 
    let validationresultPass = passwordRe.test(password);
    console.log(validationresultPass);
    if (validationresultPass === false) {
        return false;
    } else if (validationresultPass === true) {
        window.localStorage.setItem("Password", password);
    }
    let emailRe = /\w+\d?@gmail.(com|org|net)/ig; // mostafafikry@gmail.(com|org)
    let validationresultEmail = emailRe.test(email);
    console.log(validationresultEmail);
    if (validationresultEmail === false) {
        return false;
    } else if (validationresultEmail === true) {
        window.localStorage.setItem("Email", email);
    }

    return true;
}

let reset = document.querySelector(".inputs .reset");

reset.onclick = function() {
    window.localStorage.removeItem("Password", password.value);
    window.localStorage.removeItem("User", user.value);
    window.localStorage.removeItem("Email", email.value);
    console.clear();
    alarm.style.cssText = "transition: 1s; bottom: -90px; left: 50%; transform: translateX(-50%); opacity: 0;";
}

let alartControl = document.querySelector(".contact a");
let alarm = document.querySelector(".alarm"); 

alartControl.onclick = function() {
    alarm.style.cssText = "transition: 1s; bottom: 0px; left: 50%; transform: translateX(-50%); opacity: 1;"
}

// Table

let Total = document.querySelector(".tablePart .Total")
let FirsPrice = document.querySelector(".tablePart .price1");












