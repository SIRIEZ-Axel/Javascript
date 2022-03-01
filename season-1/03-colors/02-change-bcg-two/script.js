
// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2

(() => {
    var btn = document.getElementById("run");
    
    function changeColor() {
        var bcg = document.getElementById("color").value;
        document.body.style.backgroundColor = bcg;
    }

    btn.addEventListener("click", () => {
        changeColor();
    })

})();
