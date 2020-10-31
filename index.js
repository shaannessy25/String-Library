
// Challenge 1 take input and capitalize first letter only
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}


//Challenge 2 takes input string and capitalizes every letter of the string
const allCaps = (str) => {
    return str.toUpperCase()
}


//Challenge 3 take input string and capitalizes every first letter of every word
const capitalizeWords = (str) => {
    
    return str.toLowerCase()
}

const removeExtraSpaces = (str) => {
    return null
}


const kabobCase = (str) => {
    return null
}

const snakeCase = (str) => {
    return null
}

const camelCase = (str) => {
    return null
}


const shift = (str) => {
    return null
}




// export{capitalize, allCaps}
module.exports.capitalize = capitalize
module.exports.allCaps = allCaps
module.exports.capitalizeWords = capitalizeWords
module.exports.removeExtraSpaces = removeExtraSpaces
module.exports.kabobCase = kabobCase
module.exports.snakeCase = snakeCase
module.exports.camelCase = camelCase
module.exports.shift = shift