let btn = document.getElementById("clickBtn");
let msg = document.getElementById("message");

btn.addEventListener("click", function() {
    msg.innerText = "Thanks for clicking! ";
});
