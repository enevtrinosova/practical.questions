const promise1 = new Promise((res) => {
    setTimeout(() => {
        res(1)
    }, 3000);
});
const promise2 = Promise.resolve(2);
const promise3 = new Promise((res) => {
    setTimeout(() => {
        res(3)
    }, 1000);
});

const promises = [promise1, promise2, promise3];

let promise = Promise.resolve();
for (let i = 0; i < promises.length; i++) {
    promise = promise.then(() => promises[i]).then(console.log);
}
