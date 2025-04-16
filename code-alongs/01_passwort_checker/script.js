console.log('hi script.js')

let username = prompt ("Username");
let passwort = prompt ("Passwort eingeben");

checkStringLength(username, 7);
checkStringLength(passwort, 12);

function checkPassword(pw) {
    if (pw.length > 11) {
        console.log ("Dein Passwort ist lang genug.")
    } else {
        console.log ("Bitte verwende ein längeres Passwort.")
    }
}
 
function checkStringLength(testString, testlength) {
    if (testString.length >= testlength) {
        console.log ("Dein Text lang genug");
    } else {
        console.log ("Bitte verwende einen längeren Text");
    }
}


