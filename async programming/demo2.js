function tcbyloop() {
    console.log(" loop START");
    for (let i = 0; i < 10000000000; i++) {}
    console.log(" loop END");
}

function TimeConsumingByRunTimeFeature0() {
    console.log("setTimeout(5000ms) scheduled feature 0");
    setTimeout(() => {
        console.log("setTimeout(5000ms) callback START feature 0");
        for (let i = 0; i < 10000000000; i++) {}
        console.log("setTimeout(5000ms) callback END feature 0");
    }, 5000);
    console.log("Exiting TimeConsumingByRunTimeFeature0 immediately");
}

function TimeConsumingByRunTimeFeature1() {
    console.log("setTimeout(0ms) scheduled feature1");
    setTimeout(() => {
        console.log("setTimeout(0ms) callback START feature 1 ");
        for (let i = 0; i < 10000000000; i++) {}
        console.log("setTimeout(0ms) callback END feature 1");
    }, 0);
    console.log("Exiting TimeConsumingByRunTimeFeature1 immediately");
}

function TimeConsumingByRunTimeFeature2() {
    console.log("setTimeout(200ms) scheduled feature 2");
    setTimeout(() => {
        console.log(" setTimeout(200ms) callback EXECUTED feature 2");
    }, 200);
    console.log("Exiting TimeConsumingByRunTimeFeature2 immediately");
}

console.log("Program START");

tcbyloop();

TimeConsumingByRunTimeFeature0();
TimeConsumingByRunTimeFeature1();
TimeConsumingByRunTimeFeature2();

tcbyloop();

console.log("Program END");
