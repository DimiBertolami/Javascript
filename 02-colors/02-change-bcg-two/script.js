/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by Dimi@BeCode
 *          class of 2022
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
        let button = document.getElementById("run")
        button.addEventListener("click", () => {
            // alert("input is: " + document.getElementById("color").value)
            document.body.style.backgroundColor = document.getElementById("color").value
        });
})();
