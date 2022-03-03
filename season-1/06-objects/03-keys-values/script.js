// 06-objects/03-keys-values/script.js - 6.3: keys & values


(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    
    var btn = document.getElementById("run")
    btn.addEventListener("click", () =>{

        console.log(Object.keys(person));
        
        console.log(Object.values(person));
    })

})();
