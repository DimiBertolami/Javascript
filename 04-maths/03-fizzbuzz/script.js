/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    for (let i = 0; i < 99; i++) {
        console.log(i)
        let modulo_i = i % 3
        if(modulo_i===0) {
            let modulo_i = i % 5
            if(modulo_i===0){
                console.log("fizzbuzz")
            }
            console.log("buzz");
        } else {console.log("fizz")}
    }

})();
