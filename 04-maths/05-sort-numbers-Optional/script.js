/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {

    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("run").addEventListener("click", function() {
        // you can split the array by comma and spaces and it will be delimitered on quotes(")
        let numarr = document.getElementById("numbers").value.split(', ');
        // sort standar uses string input, this is a compare function used inside to force numbers
        numarr.sort(function (a,b){return a-b});
        alert(numarr);
    });

})();
