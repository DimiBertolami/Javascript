/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  // your code here
    let cake = prompt("want some cake?", "yes");
    if (cake==="yes"){
        alert("Congratulations are in order, you chose YES");
    } else {
        alert("More cake for me then");
    }
})();