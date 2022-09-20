function isPlainObject(obj) {
    if (typeof(obj) === 'object' && Array.isArray(obj) === false && !!obj) {
        return true
    } else return false
}

console.log(isPlainObject({ a: 1 }))
console.log(isPlainObject([1, 2, 3]))
console.log(isPlainObject(NaN))
console.log(isPlainObject(null))


