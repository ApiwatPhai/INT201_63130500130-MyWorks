//map((element, index, array) => { ... })


let numbers = [2,3,7,9]
let result = numbers.map((number) => {
  return number*2
})
console.log(result) 
// [4, 6, 14, 18]






// let map = Array.prototype.map
// let a = map.call('Hello World', function(x) {
//   return x.charCodeAt(0)
// })
// console.log(a)
// // a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]