// [1, 2, [3,4, [5,6] , 7, 8], 9] -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
const flatten = (array: any): any => {
    const result: any = [];

    const parse = (arr: any): void => {
        for (let i = 0; i < arr.length; i++) {
            Array.isArray(arr[i]) ? parse(arr[i]) : result.push(arr[i]);
        }
    }

    parse(array);
    return result;
}

console.log(flatten([1, 2, [3, 4, [5, [6]], 7, 8], 9]));
