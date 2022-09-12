let arr = ["Райа", "Кира", "Джейсон", "Юс"]
let friends = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length == 4) {
        friends.push(arr[i])
    }
}

console.log(friends)
