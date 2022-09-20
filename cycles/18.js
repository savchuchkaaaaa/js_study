let marks = [2, 1, 5, 4, 5, 1, 4, 3, 5, 4, 3, 2]
let sum = 0
let n = 0
for (let i = 0; i < marks.length; i++) {
    if (marks[i]>2) {
        sum += marks[i]
        n++
    }
}

console.log(sum/n)