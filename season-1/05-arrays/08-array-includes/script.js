// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    var btn = document.getElementById("run")
    btn.addEventListener("click", () => {

        if (fruits.includes("apple")) {
            console.log("There is an apple in the array")
        }else{
            console.log("There is no apple")
        }
    })

})();
