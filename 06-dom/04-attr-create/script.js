/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let elSource        = document.getElementById("source")                       // get source ID
    let image           = elSource.attributes.getNamedItem("data-image").value // get value
    let targetElement   = document.getElementById("target")                       // lock target element inside variable
    let img             = document.createElement('img');                           // new image placeholder
    img.src             = image;                                                           // set src property

    targetElement.appendChild(img);                                                 // append child to target
    console.log(elSource);                                                          // to prove element is still there
    elSource.remove()                                                               // remove from DOM
})();
