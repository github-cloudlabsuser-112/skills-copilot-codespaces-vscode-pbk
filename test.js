const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;
        default:
            throw new Error("Unknown operation");
    }
}

rl.question('Enter operation (add, subtract, multiply, divide): ', (operation) => {
    rl.question('Enter the first number: ', (firstNumber) => {
        rl.question('Enter the second number: ', (secondNumber) => {
            try {
                const result = calculate(operation, parseFloat(firstNumber), parseFloat(secondNumber));
                console.log(`Result: ${result}`);
            } catch (error) {
                console.error(`Error: ${error.message}`);
            }
            rl.close();
        });
    });
});