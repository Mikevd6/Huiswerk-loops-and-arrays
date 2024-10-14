// ==========================================
// Opdracht 1a
const scores = [
    {name: 'Max', score: 83, grade: null},
    {name: 'David', score: 77, grade: null},
    {name: 'Khalid', score: 92, grade: null},
    {name: 'Rianne', score: 66, grade: null}
];

// Print de score van elke student
for (const score of scores) {
    console.log(score.score);
}



// ==========================================
// Opdracht 1b
const scores = [
    {name: 'Max', score: 83, grade: null},
    {name: 'David', score: 77, grade: null},
    {name: 'Khalid', score: 92, grade: null},
    {name: 'Rianne', score: 66, grade: null}
];

let totalScore = 0;

// Print the letter grade for each student and calculate the total score
for (const score of scores) {
    totalScore += score.score;

    if (score.score < 60) {
        console.log("F");
    } else if (score.score < 70) {
        console.log("D");
    } else if (score.score < 80) {
        console.log("C");
    } else if (score.score < 90) {
        console.log("B");
    } else if (score.score < 100) {
        console.log("A");
    }
}

// Calculate and print the average score
const averageScore = totalScore / scores.length;
console.log("Average Score:", averageScore);


// ==========================================
// Opdracht 1c
const scores = [
    {name: 'Max', score: 83, grade: null},
    {name: 'David', score: 77, grade: null},
    {name: 'Khalid', score: 92, grade: null},
    {name: 'Rianne', score: 66, grade: null}
];

// Update the grade property for each student
function updateGrades() {
    for (let i = 0; i < scores.length; i++) {
        let score = scores[i];
        if (score.score < 60) {
            score.grade = "F";
        } else if (score.score < 70) {
            score.grade = "D";
        } else if (score.score < 80) {
            score.grade = "C";
        } else if (score.score < 90) {
            score.grade = "B";
        } else {
            score.grade = "A";
        }
    }
}

// Initial grade update
updateGrades();

// Function to find a student by name
function findStudentByName(name) {
    const student = scores.find(student => student.name === name);
    if (student) {
        console.log(`Found student: Name: ${student.name}, Score: ${student.score}, Grade: ${student.grade}`);
        return student;
    } else {
        console.log(`Student with name ${name} not found.`);
        return null;
    }
}

// Example: Find a student by name
findStudentByName('Khalid');

// Display all students to verify
displayAllStudents();

// ==========================================
// Opdracht 2
// Function to validate email format
function validateEmailFormat(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to extract domain from email with error handling
function extractDomainFromEmail(email) {
    if (!validateEmailFormat(email)) {
        throw new Error("Invalid email format");
    }
    
    const parts = email.split('@');
    return parts[1];
}

// Function to validate multiple emails
function validateMultipleEmails(emails) {
    return emails.map(email => ({
        email,
        isValid: validateEmailFormat(email)
    }));
}

// Example usage of extracting domain and validating multiple emails
try {
    const email1 = "Nova.Eeken@novi.nl";
    console.log(`Domain of "${email1}":`, extractDomainFromEmail(email1)); // "novi.nl"
    
    const email2 = "invalid-email";
    console.log(`Domain of "${email2}":`, extractDomainFromEmail(email2)); // Throws error
} catch (error) {
    console.error(error.message);
}

const emailList = [
    "Nova.Eeken@novi.nl",
    "Sam.Barnhoorn@novi.nl",
    "invalid-email",
    "Tessa.Steur@novi.nl"
];

const validationResults = validateMultipleEmails(emailList);
console.log(validationResults);

// Original task: Generate email addresses for NOVI employees
const NOVIEmployees = [
    {firstName: 'Nova', lastName: 'Eeken'},
    {firstName: 'Sam', lastName: 'Barnhoorn'},
    {firstName: 'Tessa', lastName: 'Steur'},
    {firstName: 'Mark', lastName: 'Rensen'},
];

// Add email addresses to each employee
for (let i = 0; i < NOVIEmployees.length; i++) {
    const emp = NOVIEmployees[i];
    NOVIEmployees[i] = {
        firstName: emp.firstName,
        lastName: emp.lastName,
        email: emp.firstName + "." + emp.lastName + "@novi.nl"
    };
}

console.log(NOVIEmployees);




// Opdracht 2-BONUS

console.log("Opdracht 2-BONUS");
const NOVIEmployees2 = [
    {firstName: 'Nova', lastName: 'Eeken'},
    {firstName: 'Sam', lastName: 'Barnhoorn'},
    {firstName: 'Tessa', lastName: 'Steur'},
    {firstName: 'Mark', lastName: 'Rensen'},
];

const res = [];
for (let i = 0; i < NOVIEmployees2.length; i++) {
    const emp = NOVIEmployees2[i];
    res.push({
        firstName: emp.firstName,
        lastName: emp.lastName,
        email: emp.firstName.toLowerCase() + '.' + emp.lastName.toLowerCase() + '@novi.nl'
    });
}
console.log(res);

// ==========================================
// Opdracht 3
// Create a map for zip codes and their corresponding neighborhoods
const map = new Map([
    ["3513", "Pijlsweerd"],
    ["3514", "Vogelenbuurt"],
    ["3512", "Binnenstad"],
    ["3531", "Lombok"],
    ["3572", "Wittevrouwen"],
    ["3581", "Oudwijk"],
    ["3583", "Schildersbuurt"]
]);

// List of students with their details
const students = [
    {name: 'Mariska', city: 'Utrecht', zipCode: '3513', neighborhood: null},
    {name: 'Mehmet', city: 'Utrecht', zipCode: '3514', neighborhood: null},
    {name: 'Dennis', city: 'Utrecht', zipCode: '3572', neighborhood: null},
    {name: 'Robin', city: 'Utrecht', zipCode: '3581', neighborhood: null},
    {name: 'Tanush', city: 'Utrecht', zipCode: '3512', neighborhood: null},
    {name: 'Florien', city: 'Utrecht', zipCode: '3513', neighborhood: null},
    {name: 'Larissa', city: 'Utrecht', zipCode: '3583', neighborhood: null},
    {name: 'Marijn', city: 'Utrecht', zipCode: '3572', neighborhood: null},
    {name: 'Jan', city: 'Utrecht', zipCode: '3531', neighborhood: null},
    {name: 'Laura', city: 'Utrecht', zipCode: '3531', neighborhood: null},
    {name: 'Aicha', city: 'Utrecht', zipCode: '3514', neighborhood: null},
    {name: 'Karima', city: 'Utrecht', zipCode: '3531', neighborhood: null},
];

// Assign neighborhoods based on zip codes
students.forEach(student => {
    student.neighborhood = map.get(student.zipCode) || "Unknown";
});

console.log(students);

// Correct expected outcomes:
// [
//     { name: 'Mariska', city: 'Utrecht', zipCode: '3513', neighborhood: 'Pijlsweerd' },
//     { name: 'Mehmet', city: 'Utrecht', zipCode: '3514', neighborhood: 'Vogelenbuurt' },
//     { name: 'Dennis', city: 'Utrecht', zipCode: '3572', neighborhood: 'Wittevrouwen' },
//     { name: 'Robin', city: 'Utrecht', zipCode: '3581', neighborhood: 'Oudwijk' },
//     { name: 'Tanush', city: 'Utrecht', zipCode: '3512', neighborhood: 'Binnenstad' },
//     { name: 'Florien', city: 'Utrecht', zipCode: '3513', neighborhood: 'Pijlsweerd' },
//     { name: 'Larissa', city: 'Utrecht', zipCode: '3583', neighborhood: 'Schildersbuurt' },
//     { name: 'Marijn', city: 'Utrecht', zipCode: '3572', neighborhood: 'Wittevrouwen' },
//     { name: 'Jan', city: 'Utrecht', zipCode: '3531', neighborhood: 'Lombok' },
//     { name: 'Laura', city: 'Utrecht', zipCode: '3531', neighborhood: 'Lombok' },
//     { name: 'Aicha', city: 'Utrecht', zipCode: '3514', neighborhood: 'Vogelenbuurt' },
//     { name: 'Karima', city: 'Utrecht', zipCode: '3531', neighborhood: 'Lombok' }
// ]
