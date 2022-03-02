
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {
    
    function numberOfFridaythe13thsIn(jahr){
        var jahr = document.getElementById("year").value
        var d = new Date();
        var counter = 0;
        var month = 0;
    
        for(month =0; month<12; month++){
            d.setFullYear(jahr, month,13);
            
            if (d.getDay() == 5){
                counter++;
            }
        }
        return counter                         
    }
    
    var btn = document.getElementById("run");
    
    btn.addEventListener("click", () => {
        alert(numberOfFridaythe13thsIn());
    })

})();
