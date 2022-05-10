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

                    const bCloneNode = tElement.content.cloneNode(true);

                    const eName = bCloneNode.querySelector(".name")
                    const eAlterEgo = bCloneNode.querySelector(".alter-ego");
                    const ePowers = bCloneNode.querySelector(".powers");

                    eName.innerText = hero.name;
                    eAlterEgo.innerText = hero.alterEgo;
                    ePowers.innerText = hero.abilities.join('. ') + '.';

                    document.getElementById("target").appendChild(bCloneNode);

                })
            });
    });
})();
