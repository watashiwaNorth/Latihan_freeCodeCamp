const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, stroke) {
  if (stroke === 1) {
    return "Hole-in-one!";
  } else if (stroke <= par - 2) {
    return "Eagle";
  } else if (stroke === par - 1) {
    return "Birdie";
  } else if (stroke === par) {
    return "Par";
  } else if (stroke === par + 1) {
    return "Bogey";
  } else if (stroke === par + 2) {
    return "Double Bogey";
  } else if (stroke >= par + 3) {
    return "Go Home!";
  }
}

console.log(golfScore(1, 1));
console.log(golfScore(4, 2));
console.log(golfScore(4, 3));
console.log(golfScore(4, 4));
console.log(golfScore(4, 5));
console.log(golfScore(4, 6));
console.log(golfScore(4, 7));