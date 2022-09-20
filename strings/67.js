let month = Number(prompt('Enter the number of a current month: '))
if (month ==1 || month ==2 || month == 12) {
    alert('season: winter')
} else if (month >= 3 && month <= 5) {
    alert('season: spring')
} else if (month >= 6 && month <= 8) {
    alert('season: summer')
} else if (month >= 9 && month <= 11) {
    alert('season: fall')
} else alert('incorrect month number')