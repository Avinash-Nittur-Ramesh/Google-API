// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let a = "foo";
//         a = "bar";
//         console.log(a);
//     },100);
//     resolve();
// });

// myPromise
//     .then(() => {
//         const myPromise1 = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("World");
//                 resolve();
//             }, 0);
//         });
//         myPromise1.then(() => {
//             setTimeout(() => {
//                 console.log("Hru?");
//             }, 0);
//         })
//     })
//     .catch(err => { console.log(err) });

// async function doSomething() {
//     const exp1 = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Hello");
//             resolve();
//         }, 10000);
//     });
//     const exp2 = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("World");
//             resolve();
//         }, 1000);
//     });
// }

// doSomething();

// async function doSomething() {
//     const exp1 = await new Promise((resolve, reject) => {
//         console.log("Hello");
//         resolve();
//     });
//     const exp2 = await new Promise((resolve, reject) => {
//         console.log("World");
//         resolve();
//     });
// }

// doSomething();


