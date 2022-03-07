// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    // your code here
    var pass1 = document.getElementById("pass-one")

    var valider = document.getElementById("validity")

    var passw= /^[^.*00$]\w{0,6}$/;

    pass1.onkeyup = function () {
     
        if(pass1.value.match(passw)) {
            valider.innerHTML = "Not ok";
        } else {
            valider.innerHTML = "Ok";
        }
    }

})();
