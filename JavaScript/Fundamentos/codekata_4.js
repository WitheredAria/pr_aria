/* let result = function(name, year, formatter) {
    let copyright = formatter(name, year);
    return copyright;
};

let formatter = function(name, year) {
    return name + " — " + year;
};

console.log(result("WitheredAria", 2026, formatter)); */

(function(name = "WitheredAria", year){
    console.log(name, year);
})();