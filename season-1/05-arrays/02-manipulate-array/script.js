// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    
    fruits.splice(0, 1, 'banana');
    
    fruits.splice(9, 1, 'kiwi');

    var btn = document.getElementById("run");
    btn.addEventListener("click", () => {
        console.log(fruits);
    });

})();
