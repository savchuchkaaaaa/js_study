function filterList (arr) {
    let result = []
        for (let i = 0; i < arr.length; i++) {
            if (typeof(arr[i]) == 'number') {
                result.push(arr[i])
            }
        }
        return result

    }

let arr = [1, 3, '7', 'cghk', 8, 7, 'cvghk']
console.log(filterList(arr))