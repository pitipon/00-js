const person = {
    age: 25,
    country: "USA",
    isStudent: true, // Boolean property
    hobbies: ["reading", "gaming", "traveling"], // Array property
  }
  
  // Practice test using console.assert
  console.assert(typeof person === "object", "Error: person should be an object");
  console.assert(person.age === 25, "Error: person's age should be 25");
  console.assert(person.country === "USA", "Error: person's country should be USA");
  console.assert(typeof person.isStudent === "boolean", "Error: isStudent should be a boolean");
  console.assert(person.isStudent === true, "Error: isStudent should be true");
  console.assert(Array.isArray(person.hobbies), "Error: hobbies should be an array");
