function namafunction(nama) {
    return nilai;
}

const salam = "Selamat Pagi";
function sapa(salam) {
    return "Halo " + salam;
}
console.log(sapa(salam));
console.log("--------");

function tambah(a, b) {
    return a + b;
}
console.log(tambah(3,5));
console.log("--------");

function calculateSum(num1, num2) {
    return num1 + num2;
}
function calculateDifference(num1, num2) {
    return num1 - num2;
}
function calculateProduct(num1, num2) {
    return num1 * num2;
}
function calculateQuotient(num1, num2) {
    return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}
function calculateSquare(num) {
    return num ** 2;
}
function calculateSquareRoot(num) {
    return Math.sqrt(num);
}
console.log(calculateSum(2, 5));
console.log(calculateDifference(22, 5));
console.log(calculateProduct(13, 5));
console.log(calculateQuotient(7, 11));
console.log(calculateSquare(2));
console.log(calculateSquareRoot(25));
console.log("--------");

const kali = function(a, b) {
    return a * b;
}
console.log(kali(3, 5));
console.log("--------");

const bagi = (a,b) => a * b;
console.log(bagi(3, 5));
console.log("--------");

function isEven(num) {
    return num % 2 === 0;
}
const angka = [1,2,3,4,5];
const genap = angka.filter(isEven);
console.log(genap);



