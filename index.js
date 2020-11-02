
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
    
    const splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        // Assign it back to the array 
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

//Challenge 4 remove extra spaces from input string
const removeExtraSpaces = (str, joiner = ' ') => {
    return (str.trim()).split(' ').map((word) => word.trim()).filter((elem) => elem !== '')
    .join(joiner);
}

//Challenge 5 turn input string into kabob case
const kabobCase = (str) => {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map((x) => x.toLowerCase())
        .join('-');
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