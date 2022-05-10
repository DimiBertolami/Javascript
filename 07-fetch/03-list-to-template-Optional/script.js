/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        fetch("../../_shared/api.json")
            .then(res => res.json())
            .then(data => {

                const tElement = document.getElementById("tpl-hero");

                data.heroes.forEach(hero => {

                    const clone = tElement.content.cloneNode(true);

                    const nElement = clone.querySelector(".name")
                    const aElement = clone.querySelector(".alter-ego");
                    const pElement = clone.querySelector(".powers");

                    nElement.innerText = hero.name;
                    aElement.innerText = hero.alterEgo;
                    pElement.innerText = hero.abilities.join('. ') + '.';

                    document.getElementById("target").appendChild(clone);

                })
            });
    });
})();
