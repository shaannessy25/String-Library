
// Challenge 1 take input and capitalize first letter only
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

let str = 'foo bAr'
console.log(capitalize(str))


//Challenge 2 takes input string and capitalizes every letter of the string
const allCaps = (str) => {
    return str.toUpperCase()
}

console.log(allCaps(str))

// export{capitalize, allCaps}
module.exports.capitalize = capitalize
module.exports.allCaps = allCaps