const promisify = (exFunc: any): any => {
    return function(...args: any) {
        return new Promise((resolve: any) => {
            resolve(exFunc(...args));
        });
    }
}

const exampleFn = function (a: any, b: any, callback: any): any {
    return callback(a + b);
}

const promisified = promisify(exampleFn);

const callback = function (c: any) {
    return c - 5;
}

promisified(7, 2, callback).then((res: any) => console.log(res));
