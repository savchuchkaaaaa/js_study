let hour = Number(prompt('Enter a current hour: '))
if (hour == 23 || hour == 24 || (hour >= 1) && (hour <= 5)) {
    alert('night')
} else if (hour >= 6 && hour <= 9) {
    alert('morning')
} else if (hour >= 10 && hour <= 17) {
    alert('day')
} else if (hour >= 18 && hour <= 22) {
    alert('evening')
} else alert('incorrect hour')