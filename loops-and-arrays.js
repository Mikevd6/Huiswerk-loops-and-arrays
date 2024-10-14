 Opdracht 1

// Array met namen
const names = ["Henk", "Piet", "Fred", "Joop"];

// Print de originele array
console.log(names);

// Gebruik een for-loop om elke naam in de array te vervangen door een koosnaampje
for (let i = 0; i < names.length; i++) {
    names[i] = names[i] + "je";
}

// Print de aangepaste array
console.log(names);

// Opdracht 2

const numbers = [2, 4, 5, 29, 38];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        numbers[i] = numbers[i] * 2;
    } else {
        numbers[i] = numbers[i] * 3;
    }
}
console.log(numbers);
///////

const numbers2 = [2, 4, 5, 29, 38];
for (let i = 0; i < numbers2.length; i++) {
    numbers2[i] = numbers2[i] * (numbers2[i] % 2 === 0 ? 2 : 3);
}
console.log(numbers2);
///////

const numbers3 = [2, 4, 5, 29, 38];
let numbers4 = numbers3.map(i => {
    if (i % 2 === 0) {
        return i * 2;
    } else {
        return i * 3;
    }
});
console.log(numbers4);

// Opdracht 3

// Array met de maten van de vierkanten
const squares = [30, 2, 8, 24, 11];

// Gebruik de map-functie om de array aan te passen
const volumes = squares.map(i => {
    const volume = i * i * i;
    return `Het volume van ${i} is ${volume}`;
});

// Print de aangepaste array
console.log(volumes);
