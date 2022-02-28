
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Keller programmer');

    // YOUR CODE HERE
    let age = prompt("give me your age");
    let gender = prompt("what is your gender?");
    let city = prompt("where do u live?");

    while (confirm(age + " / " + gender + " / " + city + " / " + "Is it right?") == false){
            age = prompt("give me your age");
            gender = prompt("what is your gender?");
            city = prompt("where do u live?");
        }
    window.alert("congrate!");
})();
