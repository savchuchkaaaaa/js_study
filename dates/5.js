const now = new Date()
const milNow = now.getHours()*60*60 + now.getMinutes()*60 + now.getSeconds()
const milDay = 24*60*60
console.log(milDay - milNow)