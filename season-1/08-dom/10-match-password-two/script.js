// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    // your code here
    var btn = document.getElementById("run")

    var pass1 = document.getElementById("pass-one")

    var pass2 = document.getElementById("pass-two")


    btn.addEventListener("click", () => {
        
        if(pass1.value !== pass2.value) {
            pass2.style.border = ".1rem solid red"
            pass1.style.border = ".1rem solid red"
            pass1.classList.add('error')
            pass2.classList.add('error')
        } else{
            pass2.style.border = ".1rem solid green"
            pass1.style.border = ".1rem solid green"
        }
    })

})();
