/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let day = document.getElementById("dob-day")
    let month = document.getElementById("dob-month")
    let year = document.getElementById("dob-year")

    let button = document.querySelector( 'button');

    button.onclick = function () {
        let age = 2022 - year.value
        alert(age)
        // alert("birthdate: " + day.value + month.value + year.value)
    }

})();
