function* extractNumber(attemps) {
    for (let i = 0; i < attemps; i++) {
        yield Math.floor(Math.random() * 91);
    }
};

let cpu = 0;
let player = 0;

// Tiradas CPU
let cpuGen = extractNumber(2);
cpu += cpuGen.next().value;
cpu += cpuGen.next().value;

// Tiradas player
let playerGen = extractNumber(2)
player += playerGen.next().value;
player += playerGen.next().value;

console.log("CPU: " + cpu);
console.log("Player: " + player);
console.log((cpu > player) ? "CPU WIN" : "PLAYER WIN");