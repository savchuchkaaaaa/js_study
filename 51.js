let numerator = prompt('Enter an integer number: ')
let denominator = prompt('Enter an integer number (not equal 0): ')
if ((numerator > 0 && denominator > 0) || (numerator < 0 && denominator < 0)) {
    alert('fraction > 0')
} else if ((numerator > 0 && denominator < 0) || (numerator < 0 && denominator > 0)) {
    alert('fraction < 0')
} else if (numerator == 0) {
    alert('fraction = 0')
} else if (denominator == 0) {
    alert("denominator can't be 0")
}