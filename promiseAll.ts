Promise.prototype.myAll = (promises) => {
    return new Promise((resolve) => {
        let results = [];

        let promise = Promise.resolve();
        let isRejected = false;
        for (let i = 0; i < promises.length; i++) {
            if (isRejected) {
                break;
            }

            promise = promises[i]
                .then((value) => results.push(value))
                .catch(() => {
                    results = 'rejected';
                    promise = Promise.resolve();
                });
        }

        if (isRejected) {
            resolve(results);
            return;
        }

        promise.then(() => {
            resolve(results);
        });
    });
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "two");
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "three");
});
const p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "four");
});
const p5 = new Promise((resolve, reject) => {
    // Этот промис прервёт Promise.all
    reject("reject");
});

const promises = [p2, p1, p3, p4, p5];

Promise.prototype.myAll(promises).then((results) => console.log('aaa ', results));
