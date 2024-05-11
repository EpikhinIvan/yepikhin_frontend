function* generateRandomNumber() {
    while (true) {
        yield Math.floor(Math.random() * 100) + 1;
    }
}

function generateRandom() {
    let randomNumberGenerator = generateRandomNumber();
    let { value } = randomNumberGenerator.next();
    document.getElementById('display').value = value;
}