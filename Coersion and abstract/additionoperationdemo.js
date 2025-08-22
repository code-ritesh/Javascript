let obj = {}

console.log(obj)

console.log("18" + obj) // "18 [[obj obj]]"

console.log(18 + obj)  // number + "[object Object]" → "18 [ object Object]"