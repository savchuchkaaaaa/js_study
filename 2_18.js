const str = 'ghasf hjfh ctgjh cguh vubvgh cghk ctgol cvgkldfg'
const arr = str.split(' ')
let result = arr[0].length
for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < result) {
        result = arr[i].length
    }
}
console.log(result)