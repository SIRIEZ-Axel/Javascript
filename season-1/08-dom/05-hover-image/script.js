// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {


    let img = document.querySelector('img');
    
    let hover = img.getAttribute('data-hover');

    img.addEventListener("mouseover", () => {
        img.src = hover;
    })

})();
