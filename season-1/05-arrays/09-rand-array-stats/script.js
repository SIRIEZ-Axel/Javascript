// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {
    //random function
    let arrMin = 0;
    let arrMax = 100;
    
    function rand100(arrMin, arrMax) {
        return (Math.floor(Math.random() * (arrMax - arrMin) ) + arrMin);
    }

    // put the value in the html
    var n1 = document.getElementById("n-1").innerHTML = rand100(arrMin, arrMax);
    var n2 = document.getElementById("n-2").innerHTML = rand100(arrMin, arrMax);
    var n3 = document.getElementById("n-3").innerHTML = rand100(arrMin, arrMax);
    var n4 = document.getElementById("n-4").innerHTML = rand100(arrMin, arrMax);
    var n5 = document.getElementById("n-5").innerHTML = rand100(arrMin, arrMax);
    var n6 = document.getElementById("n-6").innerHTML = rand100(arrMin, arrMax);
    var n7 = document.getElementById("n-7").innerHTML = rand100(arrMin, arrMax);
    var n8 = document.getElementById("n-8").innerHTML = rand100(arrMin, arrMax);
    var n9 = document.getElementById("n-9").innerHTML = rand100(arrMin, arrMax);
    var n10 = document.getElementById("n-10").innerHTML = rand100(arrMin, arrMax);

    //create the array with the value
    arr = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10]

    // find & display the min value
    document.getElementById("min").innerHTML = Math.min(...arr);

    //find & display the max value
    document.getElementById("max").innerHTML = Math.max(...arr);

    // function sum of the array
    function sum(arr) {
        var s = 0;
        for (let i of arr){
            s += i;
        }
        return s;
    }

    document.getElementById("sum").innerHTML = sum(arr)

    //average of the array
    var average = sum(arr)/arr.length;

    document.getElementById("average").innerHTML = average;

})();
