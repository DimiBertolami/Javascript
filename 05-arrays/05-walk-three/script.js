/* becode/javascript
 *
 * /05-arrays/05-walk-three/script.js - 5.5: parcours de tableau (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var people = [
        {
            firstname: "Garald",
            lastname: "Freschi",
            email: "gfreschi0@discuz.net",
        },
        {
            firstname: "Bendicty",
            lastname: "Foster-Smith",
            email: "bfostersmith1@mysql.com",
        },
        {
            firstname: "Michelle",
            lastname: "Draude",
            email: "mdraude2@csmonitor.com",
        },
        {
            firstname: "Cathee",
            lastname: "Meineck",
            email: "cmeineck3@t-online.de",
        },
        {
            firstname: "Marianna",
            lastname: "Coal",
            email: "mcoal4@creativecommons.org",
        },
    ];
    // pay attention where i put the ++ (execute "add 1" before using it in the console.log)
    let counter = 0;
    const outputNamesToConsole = () => {
        //to add more "commands" after the => use the comma separator(",") to prove that it steps through each of the items in the array i alert the individual values.
        people.forEach(person => console.log(++counter + ". " + person.lastname + ', ' + person.firstname, alert(person.lastname + ', ' + person.firstname)));
    };

    document.getElementById("run").addEventListener("click", outputNamesToConsole);

})();