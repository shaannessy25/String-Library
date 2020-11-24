

String.prototype.capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

// const capitalize = (str) => {
//     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
// }


String.prototype.allCaps = (str) => {
    return str.toUpperCase()
}


String.prototype.capitalizeWords = (str) => {
    
    const splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        // Assign it back to the array 
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}



String.prototype.removeExtraSpaces = (str, joiner = ' ') => {
    return (str.trim()).split(' ').map((word) => word.trim()).filter((elem) => elem !== '')
    .join(joiner);
}


String.prototype.kabobCase = (str) => {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map((x) => x.toLowerCase())
        .join('-');
}


String.prototype.snakeCase = (str) => {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join("_");
}



String.protoype.camelCase = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}


String.protoype.shift = (str = '', step = 0) => {
    const { length } = str;
    const index = step % length;
    const shift = index < 0 ? length + index : index;
    if (!str || length === 1 || !shift) {
        return str;
    }
    const reverseString = (str) => str.split('').reverse().join('');
    const newStr = reverseString(str);
    const s1 = newStr.slice(0, shift);
    const s2 = newStr.slice(shift);
    return reverseString(s1) + reverseString(s2);
};



// export{capitalize, allCaps}
module.exports.capitalize = capitalize
// module.exports.allCaps = allCaps
// module.exports.capitalizeWords = capitalizeWords
// module.exports.removeExtraSpaces = removeExtraSpaces
// module.exports.kabobCase = kabobCase
// module.exports.snakeCase = snakeCase
// module.exports.camelCase = camelCase
// module.exports.shift = shift