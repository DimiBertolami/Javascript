/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    op1         = document.getElementById("op-one");
    op2         = document.getElementById("op-two");
    LeftValue   = op1.value;
    RightValue  = op2.value;
    Clicked("addition");
    Clicked("substraction");
    Clicked("multiplication");
    Clicked("division");
})();

function Clicked(element){
    document.getElementById(element).addEventListener("click", function() {
        LeftValue   = parseInt(op1.value);
        RightValue  = parseInt(op2.value);
        switch (element){
            case "addition":
                const sum = LeftValue + RightValue;
                alert("The result of " + LeftValue + " plus " + RightValue + " is: " + sum);
                break
            case "substraction":
                const result = LeftValue - RightValue;
                alert("The result of " + LeftValue + " minus " + RightValue + " is: " + result);
                break
            case "multiplication":
                alert("The result of " + LeftValue + " times " + RightValue + " is: " + LeftValue * RightValue);
                break
            case "division":
                alert("The result of " + LeftValue + " divided by " + RightValue + " is: " + LeftValue / RightValue);
                break
            default:
                //code empty (nothing to see here)
        }
    });
}
