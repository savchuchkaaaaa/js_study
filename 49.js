let num1 = prompt('Enter an integer number: ')
let num2 = prompt('Enter an integer number: ')
if (num1 > num2) {
    alert(parseInt(num1) + parseInt(num2))
} else if (num1 < num2) {
    alert(parseInt(num1) * parseInt(num2))
} else alert('Numbers are equal')