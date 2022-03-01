
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    var time = new Date();

    var hour = time.getHours();
    
    var minutes = time.getMinutes();

    if (hour < 17) {
        target = document.getElementById("target").innerHTML = "Hello";
    }
    if (minutes < 30) {
        target = document.getElementById("target").innerHTML = "Hello";
    }
    else {
        target = document.getElementById("target").innerHTML = "Good evening";
    }

})();
