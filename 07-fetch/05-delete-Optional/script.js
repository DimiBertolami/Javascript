/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    fetch("../../_shared/api.json")
        .then(res => res.json())
        .then(data => {
            let arrHeroes = data.heroes;
            let eID = document.getElementById("hero-id");
            document.getElementById("run").addEventListener("click", () => {
                let delIndex = arrHeroes.findIndex(hero => hero.id === + eID.value);
                if (delIndex === -1){
                    window.alert("No such Index");
                    eID.value = "";
                } else {
                    arrHeroes.splice(delIndex, 1);
                    console.log(arrHeroes);
                    eID.value = "";
                };
            });
        });
})();