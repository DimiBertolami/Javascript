/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

        for (let i = 1; i < 11; i++) {
            console.log("table of " + i); //row
            // tableData.forEach(function (rowData) {
                var row = document.createElement('tr');

                for (let j = 1; j < 11; j++) {
                    let cellData = j * i;
                    // rowData.forEach(function (cellData) {
                        console.log(i + " times " + j + " equals " + j * i);
                    // createTable(j*i);
                    // function createTable(cellData) {
                        var cell = document.createElement('td');
                        cell.appendChild(document.createTextNode(cellData));
                        cell.setAttribute("bgcolor", "yellow");
                        row.appendChild(cell);
                    // };
                    tableBody.appendChild(row);
                };
                table.appendChild(tableBody);
                document.body.appendChild(table);
        };

    // createTable([["row 1, cell 1", "row 1, cell 2"], ["row 2, cell 1", "row 2, cell 2"]]);
})();

