let num = prompt('Enter an integer number:')
if (parseInt(num) % 2 == 0) {
    num--
}
for (let i = 0; i < 7; i++) {
    num = parseInt(num) + 2
    console.log(num)  
}