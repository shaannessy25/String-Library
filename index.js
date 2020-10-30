
// Challenge 1 take input and capitalize first letter only
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

let str = 'fOOOO fadd aBB'
console.log(capitalize(str))



