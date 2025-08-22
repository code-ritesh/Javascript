// ==========================
// 1. Default toString()
// ==========================
let objA = {};

console.log(typeof objA.toString()); 
// Output: "string"
// Reason: Default toString returns "[object Object]" (a string)


// ==========================
// 2. Custom toString() and valueOf()
// ==========================
let objB = {
    toString() {
        return 10; // Not a string! But JS allows it
    },
    valueOf() {
        return 20; // Will be used in math operations
    }
};

console.log(typeof objB.toString()); 
// Output: "number"
// Reason: toString() returns 10 (a number)

console.log(objB.valueOf()); 
// Output: 20
// Reason: valueOf() returns 20 directly


// ==========================
// 3. Arithmetic with plain object
// ==========================
let objC = {};

console.log(10 - objC); 
// Output: NaN
// Reason:
// - valueOf() → object (not usable)
// - toString() → "[object Object]" → NaN

console.log(objC - objC); 
// Output: NaN
// NaN - NaN = NaN


// ==========================
// 4. Object without valueOf() or toString()
// ==========================
let objD = { x: 9, y: 8 };

console.log(100 - objD); 
// Output: NaN
// Reason: Falls back to default toString → "[object Object]" → NaN


// ==========================
// 5. Object with custom valueOf()
// ==========================
let objE = {
    x: 8,
    valueOf() {
        return 99;
    }
};

console.log(100 - objE); 
// Output: 1
// Reason: valueOf() returns 99 → 100 - 99 = 1


// ==========================
// 6. Object with custom toString()
// ==========================
let objF = {
    x: 8,
    toString() {
        return "88"; // String that can be converted to number
    }
};

console.log(90 - objF); 
// Output: 2
// Reason: valueOf() missing → fallback to toString() → "88" → 90 - 88 = 2


// ==========================
// 7. Object with invalid toString() (returns non-primitive)
// ==========================
let objG = {
    x: 8,
    toString() {
        return {}; // Object, not a primitive
    }
};

//console.log(100 - objG); 
// Output: NaN
// Reason:
// - valueOf() not defined → returns object
// - toString() returns object → can't convert to number
// - Coercion fails → NaN




let  hello = {}

console.log(hello.valueOf())  // {}
console.log(hello.toString()) // "[object Object]"

console.log(typeof hello.valueOf()) // object
console.log(typeof hello.toString()) // string



