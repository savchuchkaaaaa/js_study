let str1 = prompt('Enter 2 numbers separated by a space: ')
let str2 = prompt('Enter 2 numbers separated by a space: ')
let arr1 = str1.split(' ')
let arr2 = str2.split(' ')
if (arr1[0]/arr1[1] == arr2[0]/arr2[1]) {
    alert('fractions are equal')
} else alert("fractions are not equal")
