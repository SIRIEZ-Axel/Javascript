// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    class person{
        constructor(firstname, lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        }
        set firstname(name) {
            this.first = name;
        }

        set lastname(name) {
            this.last = name;
        }

        get name() {
            return this.first +" "+ this.last;
        }
    }

    var btn = document.getElementById("run")
    btn.addEventListener("click", () => {

        let person1 = new person("Axel", "siriez");
        
        console.log(person1.name)
    })
})();
