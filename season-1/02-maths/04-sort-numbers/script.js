// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

    var num = document.getElementById("numbers").value;
    arr = [num];
    arr = num.split(/[","]/, arr.lenght);
    arr.sort((a, b) => a - b);

    alert(arr);
    });

})();
