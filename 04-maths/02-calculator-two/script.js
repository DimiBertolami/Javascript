/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    let Left   = document.getElementById("op-one");
    let Right  = document.getElementById("op-two");

    var performOperation = function(operation) {
        // perform the operation
        switch (operation){
            case "addition":
                const sum = parseInt(Left.value) + parseInt(Right.value);
                alert("The result of " + Left.value + " plus " + Right.value + " is: " + sum);
                break
            case "substraction":
                const result = parseInt(Left.value) - parseInt(Right.value);
                alert("The result of " + Left.value + " minus " + Right.value + " is: " + result);
                break
            case "multiplication":
                alert("The result of " + Left.value + " times " + Right.value + " is: " + Left.value * Right.value);
                break
            case "division":
                alert("The result of " + Left.value + " divided by " + Right.value + " is: " + Left.value / Right.value);
                break
            default:
                // sorry no default today
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
