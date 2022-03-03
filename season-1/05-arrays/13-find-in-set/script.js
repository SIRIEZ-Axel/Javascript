// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    var btn = document.getElementById("run")
    btn.addEventListener("click", () => {

        console.log("There is " + people.size + " people in the set")
        
        if (people.has("Alexandre")){
            console.log("Alexandre is present")
        }else{
            console.log("Alexandre is absent")
        }
    })
        
    })();
