/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    function recurse(){
        let yesno = "no"
        const info = {
            age: prompt("Age?", "42"),
            gender: prompt("gender?", "male"),
            town: prompt("town", "stekene"),
            question: function(){
                return this.age + " " + this.gender + " " + this.town;
            }
        }
        yesno = prompt(info.question() + " is this information correct?", yesno);
        if (yesno==="yes"){
            alert("thanks!")
        } else {
            recurse()
        }
    }
    recurse()
})();
