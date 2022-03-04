// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    var target = document.querySelectorAll("p.target");

    for (let i = 0; i < target.length; i++){
        target[i].innerHTML = "owned"
    }
    
})();
