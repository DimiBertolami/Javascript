/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let element = document.querySelector("img")
    element.addEventListener("mouseover", function(){
        let value = element.attributes.getNamedItem("data-hover").value
        element.src = value;
    })
    element.addEventListener("mouseout", function(){
        element.src = "../../_shared/img/kiss.svg";
    })
})();
