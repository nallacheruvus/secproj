// ff();

// function ff() {
//     console.log("This is interesting");
// }
// //function hoisting
//Recursion function
function countDown(n) {
    console.log(n);
    const nn = n - 1;
    if (nn > 0) {
        countDown(nn);
    }
}
let arr = [1, 2, 3, 4, 5, 'satish', true, 909277, { id: 1, name: 'sandeep' }];
let arra = Array.from([21, 22, 23, 24, 25]);
console.log(arr);
console.log(arra);

let arrb = [21, 27, 29, 98, 86];
arrb.push(56);
console.log(arrb);
arrb.pop();
console.log(arrb);
arrb.unshift(2);
console.log(arrb);
arrb.shift();
let arrc = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
for (let i = 0; i < arrc.length; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(arrc[i][j]);
    }
}
for (const aa of arrc) {
    console.log(aa);
}
console.log("*".repeat(30));
for (const k in arrc) {
    console.log(arrc[k]);
}
console.log("*".repeat(30));
let arrd = ['Ramnujam', 'Bohr', 'Einstein', 'Raman', 'Bose'];
for (const i of arrd) {
    console.log(i);
}
console.log("*".repeat(30));
for (const k in arrd) {
    console.log(arrd[k]);
}
console.log("*".repeat(30));
arrd.forEach(function (a) {
    console.log(a);
});
console.log("*".repeat(30));
arrd.map(function (a) {
    console.log(a);
});
console.log("*".repeat(30));
let arre = [212, 213, 214, 15, 17, 98, 764, 54];
for (const i of arre) {
    console.log(i);
}
console.log("*".repeat(30));
for (const k in arre) {
    console.log(arre[k]);
}
console.log("*".repeat(30));
arre.forEach(n => console.log(n));
console.log("*".repeat(30));
arre.map(n => console.log(n));
const tt = true;
if (tt) {
    console.log("True");
} else {
    console.log("false");
}
tt ? console.log("True") : console.log("False");//ternary operator
let arrf = [[[1, 2], [3]], [[11, 12], [13]], [[111, 1112], [113]]];
for (const i of arrf) {
    console.log(i[0] + " " + i[1]);
}
for (const k in arrf) {
    console.log(arrf[k][0] + " " + arrf[k][1]);
}
arrf.forEach(n => console.log(n));
arrf.map(n => console.log(n[0] + " " + n[1]));
console.log(arrf.flat(3));
let arrg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sums = 0;
sums = arrg.reduce((a, b) => (a + b));
console.log(sums);





