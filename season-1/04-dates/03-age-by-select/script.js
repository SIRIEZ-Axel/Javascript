
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    var dobDay = document.getElementById("dob-day").value
    var dobMonth = document.getElementById("dob-month").value
    var dobYear = document.getElementById("dob-year").value

    var Dob = new Date(parseInt(dobDay) +parseInt(dobMonth) +parseInt(dobYear));

    var Dot = Date.now();

    var age = Dot - Dob;

    var milliseconds = age;
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var month = day * 30;
    var year = day * 365;

    // age conversion 
    var years = Math.round(milliseconds/year);
    var months = Math.round(years / 12);
    var days = Math.round(years / 365);
    var hours = Math.round(milliseconds/hour);
    var seconds = Math.round(milliseconds/second);

    var btn = document.getElementById("run");
    btn.addEventListener("click", () => {
        alert("Age of user : " + " " + years + " " + "years" + " " +  months + " " + "months" + " " + days + " " + "Days")
    })

})();
