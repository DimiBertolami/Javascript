/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        fetch("/_shared/api.json")
            .then(res => res.json())
            .then(data => {

                const heroValue = +document.getElementById("hero-id").value;

                const hero = data.heroes.find(hero => hero.id === heroValue);

                const tElement = document.getElementById("tpl-hero");
                let cloneNode = tElement.content.cloneNode(true);

                const nElement = cloneNode.querySelector(".name")
                const alterElement = cloneNode.querySelector(".alter-ego");
                const pElement = cloneNode.querySelector(".powers");

                nElement.innerText = hero.name;
                alterElement.innerText = hero.alterEgo;
                pElement.innerText = hero.abilities.join(', ');

                document.getElementById("target").appendChild(cloneNode);

            });
    });

})();
