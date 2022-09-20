function sorted (str) {
    let arr = str.split('')
    const sorted = arr.sort((a, b) => {
        return a.localeCompare(b, undefined, {sensitivity: 'base'})
      })
      return sorted.join('')
}

let string = 'The Holy Bible'
console.log(sorted(string))
