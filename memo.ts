const memo = (func: any): any => {
    const cache: any = {};

    return (...args: any[]) => {
        const key = JSON.stringify(args);

        if (cache[key]) {
            console.log('Cache value is used');
            return cache[key];
        }

        cache[key] = func(...args);
        return cache[key];
    }
}

const fib = memo((n: number): number => {
    if (n < 2) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
});

fib(100);
console.log('Next call');
fib(100);
