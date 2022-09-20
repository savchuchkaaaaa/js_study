let num = 12
let marks = [2, 1, 1, 4, 5, 1, 2, 1, 5, 4, 3, 2]
let bad = []
for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 3) {
        bad.push(marks[i])
    }
}

if (bad.length > num/2) {
    console.log('failed')
} else console.log('well done!')