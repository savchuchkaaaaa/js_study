console.log('start')
for (let i = 99; i > 0; i--) {
    let arr = Array.from(String(i), Number)
    if (arr[1] == 7) {
        console.log(i)
    }
}
console.log('finish')