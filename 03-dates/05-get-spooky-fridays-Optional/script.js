/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    const dayToLookFor = 13;
    let target = document.getElementById('target');
    const run = document.getElementById('run');
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let yr = document.getElementById('year');
    run.addEventListener('click', setTarget);

    let date = new Date();
    function setTarget() {
        let year = yr.value;
        let hasThe13th = [];
        date.setFullYear(year);
        date.setDate(dayToLookFor);
        for (month = 0; month < months.length; month++) {
            date.setMonth(month)
            if (date.getDay() === 5) {hasThe13th.push(months[month])}
        }
        let response = "In: " + year + " ";
        for (i = 0; i < hasThe13th.length; i++) {alert(hasThe13th[i] + " Has a Friday the 13th")}
    }

})();
