// Opdracht 1. Maak een for loop die het volgende patroon in de terminal print

for (let i = 1; i < 6; i++) {
	console.log("*".repeat(i));
}
// ==========================================

// Opdracht 2
for (let i = 1; i < 5; i++) {
	console.log("loop...");
}
console.log("klaar!");

// ==========================================

// Opdracht 3

for (let i = 0; i < 10; i++) {
	if (i > 2 && i < 6) {
		console.log("> " + i);
	} else if (i > 5) {
		console.log(">> " + i);
	} else {
		console.log(i);
	}
}

// ==========================================


// Opdracht 4 BONUS
for (let i = 1; i <= 100; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";

    console.log(output || i);
}


