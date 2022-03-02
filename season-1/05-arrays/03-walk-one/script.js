// 05-arrays/01-get-element/script.js - 5.1: walk through the list

(() => {

    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    var btn = document.getElementById("run");
    btn.addEventListener("click", () => {
        for (let i = 0; i< fruits.length; i++){
            console.log(fruits[i])
        }
    })

})();
