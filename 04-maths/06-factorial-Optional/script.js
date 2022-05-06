/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        // let n = 4;
        let n = document.getElementById("number").value
        answer = factorial(n)
        console.log("The factorial of " + n + " is " + answer);
        alert("The factorial of " + n + " is " + answer);
    });

})();

function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
        //recursive case
    }else{
        return n * factorial(n-1);
    }
}
