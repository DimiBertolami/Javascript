/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let div = document.getElementById("target");
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    let row = document.createElement("row");
    for (let i = 0; i < 10; i++) {
        let cell = document.createElement("td");         // table data
        let cellText = document.createTextNode("row " + i); // first enter cell text content
        cell.appendChild(cellText);                              // enter text into celldata
        row.appendChild(cell);                                   // add cell to row
        tbody.appendChild(row);                                  // add formatted row to table
        table.appendChild(tbody);                                // add body of the table inside table
        div.appendChild(table);                                  // add table to div element
        table.setAttribute("border", "2");      // just some border properties
        table.setAttribute("bgcolor", "blue");
        table.setAttribute("bgcolor", "blue");
    }
})();
