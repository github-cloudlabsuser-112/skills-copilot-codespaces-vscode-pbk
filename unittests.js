// FILEPATH: /workspaces/skills-copilot-codespaces-vscode-pbk/test.js
const calculate = require('./calculate'); // assuming your function is exported from calculate.js

describe('calculate', () => {
    test('add', () => {
        expect(calculate('add', 1, 2)).toBe(3);
        expect(calculate('add', -1, 2)).toBe(1);
    });

    test('subtract', () => {
        expect(calculate('subtract', 5, 2)).toBe(3);
        expect(calculate('subtract', -1, 2)).toBe(-3);
    });

    test('multiply', () => {
        expect(calculate('multiply', 3, 2)).toBe(6);
        expect(calculate('multiply', -1, 2)).toBe(-2);
    });

    test('divide', () => {
        expect(calculate('divide', 4, 2)).toBe(2);
        expect(calculate('divide', -1, 2)).toBe(-0.5);
        expect(() => calculate('divide', 1, 0)).toThrow("Cannot divide by zero");
    });

    test('unknown operation', () => {
        expect(() => calculate('unknown', 1, 2)).toThrow("Unknown operation");
    });
});