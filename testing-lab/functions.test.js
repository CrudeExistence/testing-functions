const { 
    returnTwo, 
    greeting, 
    add, 
    multiply, 
    divide, 
    subtract 
} = require('./functions')


test('Should return 2', () => {
    expect(returnTwo()).toBe(2)
})

test('Should return string plus name', () => {
    expect(greeting('James')).toBe('Hello, James.')
    expect(greeting('Jill')).toBe('Hello, Jill.')
})

test('This should add both numbers', () => {
    expect(add(1, 2)).toBe(3)
    expect(add(5, 9)).toBe(14)
})

describe('Math functions', () => {
    test('This should return added numbers', () => {
        expect(add(3,6)).toBe(9)
        expect(add(2,4)).toBe(6)
    })

    test('This should multiply arguments', () =>{
        expect(multiply(3,3)).toBe(9)
        expect(multiply(100,10)).toBe(1000)
    })

    test('This should divide arguments', () => {
        expect(divide(9,3)).toBe(3)
        expect(divide(10,5)).toBe(2)
    })

    test('This should subtract arguments', () => {
        expect(subtract(10,5)).toBe(5)
        expect(subtract(20,10)).toBe(10)
    })
}) 