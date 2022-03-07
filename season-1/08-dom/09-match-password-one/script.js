// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here
    var btn = document.getElementById("run")

    var pass1 = document.getElementById("pass-one")

    var pass2 = document.getElementById("pass-two")

    btn.addEventListener("click", () => {
        
        if(pass1.value !== pass2.value) {
            pass2.style.border = ".1rem solid red"
            pass1.style.border = ".1rem solid red"
        } else{
            pass2.style.border = ".1rem solid green"
            pass1.style.border = ".1rem solid green"
        }
    })


})();
