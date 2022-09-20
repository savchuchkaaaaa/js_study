const str = 'альфа бета бета гамма гамма дельта альфа бета бета гамма гамма дельта'
console.log ([...new Set(str.split(" "))].join(" "))