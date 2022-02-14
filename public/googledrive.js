const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hello");
    }, 0);
});

myPromise
    .then(() => {
        const myPromise1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("World");
                resolve();
            }, 0);
        });
        myPromise1.then(() => {
            setTimeout(() => {
                console.log("Hru?");
            }, 0);
        })
    })
    .catch(err => { console.log(err) });