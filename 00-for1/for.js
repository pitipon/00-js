function printStar(n) {
    for (let i = 1; i <= n; i++) {
        let stars = "";
        for (let j = 1; j <= i; j++) {
            stars += "*";
        }
        console.log(stars);
    }
}

// Example usage:
printStar(4);

