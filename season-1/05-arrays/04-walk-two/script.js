// 05-arrays/04-walk-two/script.js - 5.4: walk through the list (2)


(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    var btn = document.getElementById("run");
    btn.addEventListener("click", () => {
        fruits.forEach(Element => console.log(Element))
    })
    
})();
