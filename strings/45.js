let str = prompt("Enter a string: ")
if (str[0]=' ') {
    str = str.slice(1)
}
strSplit = str.split(' ')
alert(strSplit.join(''))

