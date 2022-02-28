
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {
    document.getElementById("run").addEventListener("click", () => {
        var arr =[]
        for (var i = 1; i <= 21; i++){
            var result = 0;
            var n = i;

            result = n * n;
            arr[i] = result;
        }
        alert(arr)
    });

})();
