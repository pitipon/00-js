function isEven(num) {
    return num % 2 === 0;
  }
  
  // Test cases
  console.assert(isEven(2) === true, "Test failed: isEven(2) should be true");
  console.assert(isEven(3) === false, "Test failed: isEven(3) should be false");
  console.assert(isEven(10) === true, "Test failed: isEven(10) should be true");
  console.assert(isEven(15) === false, "Test failed: isEven(15) should be false");
  