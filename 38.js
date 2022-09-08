
function yearToCentury(year) {
    return parseInt(year/100) + 1
}

year = prompt('Enter year: ')
console.log(yearToCentury(year))
