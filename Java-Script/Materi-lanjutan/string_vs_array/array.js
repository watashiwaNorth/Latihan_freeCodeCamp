const kata = "halo";
const huruf = kata.split("");
console.log(huruf);
console.log("--------");

const arr = ['h', 'a', 'l', 'o'];
arr.reverse();
console.log(arr);
console.log("--------");

const arr2 = ['o', 'l', 'a', 'h'];
const kata2 = arr2.join("");
console.log(kata2);
console.log("--------");

function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("halo"));
console.log(reverseString("JavaScript"));
console.log(reverseString("12345"));