// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    var btn = document.getElementById("run");
    btn.addEventListener("click", () => {
    
        let person = {
            lastname : "Siriez",
            firstname : "Axel",
            age : 24,
            city : "Charleroi",
            country : "Belgium"
        }
        
        console.log(person)
    })
})();
