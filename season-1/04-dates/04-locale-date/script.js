
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    var date = new Date();
    
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        
    document.getElementById("target").innerHTML = date.toLocaleString("en-EN", options) + ", " + date.getHours() + "h" + date.getMinutes();
    
})();
