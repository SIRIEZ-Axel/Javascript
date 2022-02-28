
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    var op1 = document.getElementById("op-one");
    var op2 = document.getElementById("op-two");
    var result = 0;

    const performOperation = operation => {
        switch(operation) {
            case "addition":
                result = parseInt(op1.value) + parseInt(op2.value);
                alert(result);

            break;
            case "substraction":
                result = parseInt(op1.value) - parseInt(op2.value);
                alert(result);

            break
            case "multiplication":
                result = parseInt(op1.value) * parseInt(op2.value)
                alert(result)

            break
            case "division":
                result = parseInt(op1.value) / parseInt(op2.value)
                alert(result)

            break 
            default :    
                alert("choose an operation")
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
