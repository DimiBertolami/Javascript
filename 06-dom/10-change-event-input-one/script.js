/* becode/javascript
 *
 *
 */


(function() {

    // your code here
    document.getElementById("pass-one").addEventListener("keydown", () => {
        let elCounter = document.getElementById("counter");
        let elPassword = document.getElementById("pass-one");
        let pwLen = elPassword.value.length;

        elCounter.innerText = pwLen.toString() + "/10";
        console.log(elCounter.innerText);
        if (elCounter.innerText==="10/10"){
            document.getElementById("pass-one").setAttribute("disabled", "true");
        }
    })
})();
