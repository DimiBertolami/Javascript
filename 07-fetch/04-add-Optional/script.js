/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const name = document.getElementById("hero-name");
    const alterEgo = document.getElementById("hero-alter-ego");
    const powers = document.getElementById("hero-powers");
    const fieldsArr = [name, alterEgo, powers];
    let counter = 0;

    const catchEmptyFields = () => {
        fieldsArr.forEach(field => {
            if(field.value === ""){
                field.className = "error";
            } else {
                counter++;
                field.className = "";
            };
        })
    };

    fetch("../../_shared/api.json")
        .then(res => res.json())
        .then(data => {

            let arrHeroes = data.heroes;

            document.getElementById("run").addEventListener("click", () => {

                catchEmptyFields();

                if (counter === 3){
                    let newName = name.value;
                    let newAlterEgo = alterEgo.value;
                    let newPower = []
                    newPower.push(powers.value);
                    let newHero = {
                        id: arrHeroes.length + 1,
                        name: newName,
                        alterEgo: newAlterEgo,
                        abilities: newPower
                    }
                    arrHeroes.push(newHero);
                    console.log(arrHeroes);

                    name.value = "";
                    alterEgo.value = "";
                    powers.value = "";
                } else {
                    counter = 0;
                }
            });
        });
})();