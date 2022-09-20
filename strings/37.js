let str = prompt ('Enter your full name: ');
let arr = str.split(" ");
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

console.log(arr[0].charAt(0).toUpperCase() + "." + arr[1].charAt(0).toUpperCase() + '.')