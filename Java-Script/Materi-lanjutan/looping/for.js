for (let i = 0; i < 5; i++) {
    console.log("Iterasi ke-" + i);
}
console.log("--------")

let a = 0;
while (a < 3) {
    console.log("Nilai a: " + a);
    a++;
}
console.log("--------")

for (const char of "halo") {
    console.log(char);
}
console.log("--------")

const arr = ["a", "b", "c"];
for (const index in arr) {
    console.log(index);
}
console.log("--------")

const doubled = [1,2,3].map(kuanti => kuanti * 2);
console.log(doubled);
console.log("--------")

const total = [1,2,3].reduce((acc, curr)=> acc + curr, 0);
console.log(total);
console.log("--------")

const evens = [1,2,3,4,5].filter(angka => angka % 2 === 0);
console.log(evens);