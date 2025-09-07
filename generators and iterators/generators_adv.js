function* fetchNextElement() {

    console.log("inside generator")
    const x = 10;

    //console.log(yield 11)

    yield {name : "ritesh"}

    console.log("entering after the first yield")

    const y = x + (yield 30)
    // y = x + NaN = NaN
    // y = 10 + 100  ( iter.next(100) )

    console.log("value of y is ",y)
}

const iter = fetchNextElement()

console.log("1st",iter.next());
//console.log("2nd",iter.next());
console.log("2nd",iter.next(55555));
console.log("3rd",iter.next());

