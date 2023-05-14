const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
    // resolve("one")
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "two");
    // resolve("two")
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "three");
    // resolve("three")
});
const p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "four");
    // resolve("four")
});
const p5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "five");
    // resolve("five")
});
const p6 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "six");
    // resolve("six")
});

const notMoreThan = (promises, limit) => {
    let currentPromiseIndex = limit - 1;
    const length = promises.length;
    const result = [];

    return new Promise((resolve) => {
        const makePromise = (promise) => {
            return promise.then((res) => {
                result.push(res);

                if (currentPromiseIndex === length) {
                    resolve(result);
                    return;
                }

                currentPromiseIndex += 1;
                if (currentPromiseIndex < length) {
                    return makePromise(promises[currentPromiseIndex]);
                }
            });
        }

        let promise = Promise.resolve();
        for (let i = 0; i < limit; i++) {
            promise = makePromise(promises[i]);
        }
    });
};

notMoreThan([p1, p2, p3, p4, p5, p6], 2).then(console.log);
