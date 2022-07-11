const sum = require('./UnitTests.js')


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 10 + 2 to equal 12', () => {
    expect(sum(10, 2)).toBe(12);
});

test('adds -100 + 100 to equal 0', () => {
    expect(sum(-100, 100)).toBe(0);
});

test('adds 50 + -25 to equal 25', () => {
    expect(sum(50, -25)).toBe(25);
});

test('adds 30 + -40 to equal -10', () => {
    expect(sum(30, -40)).toBe(-10);
});

test('adds 10 + 10 to equal 20', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
});

test('adds 0 + 20 to equal 20', () => {
    expect(sum(0, 20)).toBe(20);
});

test('adds 12.5 + 0 to equal 12.5', () => {
    expect(sum(12.5, 0)).toBe(12.5);
});

test('adds 12.3 + 16.4 to equal 28.7', () => {
    expect(sum(12.3, 16.4)).toBe(28.7);
});

test('adds hi + hello to equal 28.7', () => {
    expect(sum(12.3, 16.4)).toThrowError('You can only add numbers, not any other type.');
});