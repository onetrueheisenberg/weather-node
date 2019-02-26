console.log("Starting app");

setTimeout(() => {
    console.log("async yoyo");
}, 2000);

setTimeout(() => {
    console.log("Second yoyo");
}, 0);
console.log("finnish");