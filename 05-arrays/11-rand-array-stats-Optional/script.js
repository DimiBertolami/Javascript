/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let arrNrs = [];
    let randomNR = Math.floor((Math.random() * 100) + 1);
    console.log("random nr = " + randomNR);
    let element1 = document.getElementById("n-1");
    element1.textContent = parseInt(randomNR)
    arrNrs.push(randomNR)

    let randomNR1 = Math.floor((Math.random() * 100) + 1);
    console.log("random nr = " + randomNR1);
    let element2 = document.getElementById("n-2");
    element2.textContent = parseInt(randomNR1)
    arrNrs.push(randomNR1)

    let randomNR2 = Math.floor((Math.random() * 100) + 1);
    console.log("random nr = " + randomNR2);
    let element3 = document.getElementById("n-3");
    element3.textContent = parseInt(randomNR2)
    arrNrs.push(randomNR2)

    let randomNR3 = Math.floor((Math.random() * 100) + 1);
    console.log("random nr = " + randomNR3);
    let element4 = document.getElementById("n-4");
    element4.textContent = parseInt(randomNR3)
    arrNrs.push(randomNR3)

    let randomNR4 = Math.floor((Math.random() * 100) + 1);
    console.log("random nr = " + randomNR4);
    let element5 = document.getElementById("n-5");
    element5.textContent = parseInt(randomNR4)
    arrNrs.push(randomNR4)

    let randomNR5 = Math.floor((Math.random() * 100) + 1);
    console.log("random nr = " + randomNR5);
    let element6 = document.getElementById("n-6");
    element6.textContent = parseInt(randomNR5)
    arrNrs.push(randomNR5)

    let randomNR6 = Math.floor((Math.random() * 100) + 1);
    console.log("random nr = " + randomNR6);
    let element7 = document.getElementById("n-7");
    element7.textContent = parseInt(randomNR6)
    arrNrs.push(randomNR6)

    let randomNR7 = Math.floor((Math.random() * 100) + 1);
    console.log("random nr = " + randomNR7);
    let element8 = document.getElementById("n-8");
    element8.textContent = parseInt(randomNR7)
    arrNrs.push(randomNR7)

    let randomNR8 = Math.floor((Math.random() * 100) + 1);
    console.log("random nr = " + randomNR8);
    let element9 = document.getElementById("n-9");
    element9.textContent = parseInt(randomNR8)
    arrNrs.push(randomNR8)

    let randomNR9 = Math.floor((Math.random() * 100) + 1);
    console.log("random nr = " + randomNR9);
    let element10 = document.getElementById("n-10");
    element10.textContent = parseInt(randomNR9)
    arrNrs.push(randomNR9)

    let smallest = arrNrs[0];
    let largest = arrNrs[0];
    for(var i=1; i<arrNrs.length; i++){
        if(arrNrs[i] < smallest){smallest = arrNrs[i];}
        if(arrNrs[i] > largest){largest = arrNrs[i];}
    }

    console.log(smallest);
    document.getElementById("min").textContent = smallest;
    document.getElementById("max").textContent = largest;
    const sum = arrNrs.reduce((b, a) => b + a, 0);
    console.log(sum); // 6
    document.getElementById("sum").textContent = sum;
    const avg = (sum / arrNrs.length) || 0;
    // document.getElementById("run").addEventListener("click", () => document.getElementById("sum").textContent = sum;);
    document.getElementById("average").textContent = avg;

})();
