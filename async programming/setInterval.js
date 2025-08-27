// Start an interval that prints "hello world running" every 1 second
let id = setInterval(() => {
    console.log("hello world running")
}, 1000);

// Immediately clear the interval (so it won’t actually run)
// To stop an interval, you MUST keep the reference (id) returned by setInterval
clearInterval(id);

// The type of 'id' in browsers is usually "number" (interval ID)
// In Node.js runtime, 'id' is an object (Timer object), not a number
console.log(typeof id); // "number" in browser, "object" in Node.js

// Log the actual value of 'id'
// In browser → numeric ID (e.g., 1, 2, 3 ...)
// In Node.js → a Timer object with properties and methods
console.log(id);

console.log("end"); 
