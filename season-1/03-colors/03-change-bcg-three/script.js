
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    let btn = document.getElementById("run");

    function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        
        document.body.style.background = bgColor;
    }
    
    btn.addEventListener("click", () => {
        document.body.style.backgroundColor = random_bg_color();
    })


})();
