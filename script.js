let message = document.getElementsByClassName("message");

let messageOnline = () => {
    message.textContent = "Internet Connection Alive";
    message.style.cssText = "background-color: #e7f6d5; color: #689f38";
};
let messageOffline = () => {
    message.textContent = "Internet Connection Dead";
    message.style.cssText = "background-color: #ffdde0; color: #d32f2f";
};

if (window.navigator.onLine) {
    messageOnline();
} else {
    messageOffline();
}

window.addEventListener("online", messageOnline);
window.addEventListener("offline", messageOffline);