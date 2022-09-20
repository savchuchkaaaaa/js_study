let a = Number(prompt('Enter first angle'))
let b = Number(prompt('Enter second angle'))
let c = Number(prompt('Enter third angle'))
if ((a == 90 || b == 90 || c == 90) && a + b + c == 180) {
    alert('right triangle')
} else if (a < 90 && b < 90 && c <90 && a + b + c == 180) {
    alert('acute triangle')
} else if (a > 90 || b > 90 || c > 90 && a + b + c == 180) {
    alert('obtuse triangle')
} else alert("error, such a triangle doesn't exist")