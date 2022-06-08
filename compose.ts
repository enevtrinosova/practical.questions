const compose = (...functions: ((num: number) => number)[]): (num: number) => number => (
    (num: number): number => {
        for (let i = 0; i < functions.length; i++) {
            num = functions[i](num);
        }
        return num;
    }
);

const plus = (a: number) => (b: number) => a + b;
const minus = (a: number) => (b: number) => b - a;
const multiply = (a: number) => (b: number) => b * a;

const result = compose(plus(5), minus(3), multiply(2));

// ((10 + 5) - 3) * 2 = 24
console.log(result(10));
