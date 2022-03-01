
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    var hour = new Date();

    var time = hour.getHours();

    if (time < 18 ) {
        target = document.getElementById("target").innerHTML = "Hello";
    } else {
        target = document.getElementById("target").innerHTML = "good evening";
    }

})();
