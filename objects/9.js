function isEmpty(val) {
    if (Object.keys(val).length === 0) {
        return true
    }

    const values = Object.values(val)
    for (let key of values) {
        if (!key) {
            return true
        } else return false
    }
}

console.log(isEmpty({}))
console.log(isEmpty({a: undefined}))
console.log(isEmpty({a: NaN}))
console.log(isEmpty({a: ''}))
console.log(isEmpty({a: null}))
console.log(isEmpty({a: 1, b: undefined}))
console.log(isEmpty({a: 1}))