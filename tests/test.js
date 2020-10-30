// import{ captilize, allCaps } from '../index'
const stringLib = require('../index')


test("Testing capitalize",  () => {
    expect(stringLib.capitalize("hello")).toBe("Hello")
})


test("Testing allCaps", () => {
    expect(stringLib.allCaps('hello')).toBe("HELLO")
})