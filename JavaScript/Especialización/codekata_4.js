/* let enumeration = [];

for (let i = 0; i < 10; i++) {
    enumeration[i] = i + 1;
};

console.log(enumeration); */

/* let limit = 3;

do {
    limit--;
} while(limit > 0);

console.log("Bucle terminado."); */

let fruits = ["orange", "lemon", "grape"];
let myOptions = new Set(["watermelon", "banana"]);

/* for (let elem of fruits) {
    console.log(elem);
}; */

/* for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] == "lemon") {
        console.log(fruits[i]);
        break;
    }

    console.log(fruits[i]);
}; */

for (let elem of fruits) {
    if (myOptions.has(elem)) {
        console.log(elem);
        break;
    } else {
        console.log(elem);
        continue;
    }
};