const functions = require('./functions');

test('Adds 2 plus 2 equals 4',()=>{
    expect(functions.add(2,2)).toBe(4)
});

test('Adds 2 plus 3 equals 5',()=>{
    expect(functions.add(2,3)).toBe(5)
});