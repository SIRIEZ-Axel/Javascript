// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    // your code here
    var pass1 = document.getElementById("pass-one")

    var counter = document.getElementById("counter")

    pass1.onkeyup = function () {
        counter.innerHTML = (this.value.length) + "/10"; 
        var max_chars = 9;

        if(pass1.value.length > max_chars) {
            pass1.value = pass1.value.substr(0, max_chars);
        }
    }

})();
