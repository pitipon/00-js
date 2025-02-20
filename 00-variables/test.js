// TODO




// Test
console.assert(typeof person === "object", "Error: person should be an object");
console.assert(person.age === 25, "Error: person's age should be 25");
console.assert(person.country === "USA", "Error: person's country should be USA");
console.assert(typeof person.isStudent === "boolean", "Error: isStudent should be a boolean");
console.assert(person.isStudent === true, "Error: isStudent should be true");
console.assert(Array.isArray(person.hobbies), "Error: hobbies should be an array");
console.assert(person.hobbies.includes("gaming"), "Error: hobbies should include 'gaming'");
console.assert(typeof person.address === "object", "Error: address should be an object");
console.assert(person.address.city === "New York", "Error: city should be 'New York'");
console.assert(person.address.zipCode === 10001, "Error: zipCode should be 10001");
