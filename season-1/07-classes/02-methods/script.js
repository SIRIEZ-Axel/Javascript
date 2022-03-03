//07-classes/02-methods/script.js - 7.2: methods


(() => {
    var btn = document.getElementById("run")
    btn.addEventListener("click", () => {

        class person {
            constructor(firstname, lastname) {
                this.firstname = firstname;
                this.lastname = lastname;
            }
            
            sayHello() {
                console.log(" Hello, " + this.firstname + this.lastname);
            }
        }
        
        new person("Axel ", "Siriez").sayHello();
    })
      
})();
