// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    
    const cat1 = new Cat("Skitty", "9 years")
    const cat2 = new Cat("Pixel", "6 years")
    console.log(cat1)
    console.log(cat2)
    
})();