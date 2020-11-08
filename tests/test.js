// import{ captilize, allCaps } from '../index'
const stringLib = require('../index')



test("Testing capitalize",  () => {
    expect(stringLib.capitalize("hello")).toBe("Hello")
    expect(stringLib.capitalize("hELLO")).toBe("Hello")
})


test("Testing allCaps", () => {
    expect(stringLib.allCaps('hello')).toBe("HELLO")
    expect(stringLib.allCaps('HeLlo')).toBe("HELLO")
})

test("Testing capitalize words", () => {
    expect(stringLib.capitalizeWords('do all the things')).toBe('Do All The Things')
    expect(stringLib.capitalizeWords('Do aLl tHe thIngs')).toBe('Do All The Things')
})


test("Testing removeExtraSpaces from input string", () =>  {
    expect(stringLib.removeExtraSpaces(" Hello")).toBe("Hello")
    expect(stringLib.removeExtraSpaces(" hello      world ")).toBe("hello world")

    //This test is an edge case involving symbols in the input strings
    // expect(stringLib.removeExtraSpaces(" Hello World ! ")).toBe("Hello World! ")  
})

test("Testing kabob case", () => {
    expect(stringLib.kabobCase("Hello World")).toBe("hello-world")
    expect(stringLib.kabobCase("find my folder")).toBe("find-my-folder")
})

test("Testing snakeCase", () => {
    expect(stringLib.snakeCase("Hello World")).toBe("hello_world")
    expect(stringLib.snakeCase("find my folder")).toBe("find_my_folder")
})

test("Testing camelCase", () => {
    expect(stringLib.camelCase("Hello World")).toBe("helloWorld")
    expect(stringLib.camelCase("Correct path")).toBe("correctPath")

})

test("Testing Shift", () => {
    expect(stringLib.shift("Hello", 1)).toBe("oHell")
    expect(stringLib.shift("foo bar", 3)).toBe("barfoo ") 

})