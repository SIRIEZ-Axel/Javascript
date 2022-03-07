// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    let src = document.querySelector("#source")

    let trg = document.querySelector("#target")

    img = document.createElement("img")

    img.src = src.getAttribute('data-image');

    trg.appendChild(img)
    
})();
