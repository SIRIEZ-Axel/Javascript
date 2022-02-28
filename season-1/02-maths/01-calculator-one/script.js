
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    var op1 = document.getElementById("op-one")
    var op2 = document.getElementById("op-two")
    var result = 0;

    document.getElementById("addition").addEventListener("click", function() {
        result = parseInt(op1.value) + parseInt(op2.value);
        alert(result)
    });

    document.getElementById("substraction").addEventListener("click", function() {
        result = parseInt(op1.value) - parseInt(op2.value);
        alert(result)

    });

    document.getElementById("multiplication").addEventListener("click", function() {
        result = parseInt(op1.value) * parseInt(op2.value);
        alert(result)

    });

    document.getElementById("division").addEventListener("click", function() {    
        result = parseInt(op1.value) / parseInt(op2.value);
        alert(result)
    });
})();
