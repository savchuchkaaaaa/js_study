let num1 = prompt('Enter an integer number: ')
let num2 = prompt('Enter an integer number: ')
if ((num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0)) {
    alert('the same sign')
} else if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
    alert('different signs')
} else alert('numbers are incorrerct')