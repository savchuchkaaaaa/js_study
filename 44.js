let year = prompt('Enter a year: ')
if (year%4==0 || year%100==0 || year%400==0) {
    alert(year + ' - a leap year')
} else alert(year + ' - not a leap year')