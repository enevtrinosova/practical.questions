function* asyncGenerator(callback: () => any): Generator<any> {
    return yield callback();
}

const async = (asyncF: () => any): void => {
    const gen = asyncGenerator(asyncF);

    const callGen = (data?: any): void => {
        const resp = gen.next(data);
        if (resp.done) {
            console.log(resp.value)
            return;
        }

        resp.value.then(callGen);
    }
    callGen();
}

const asyncFunction = (): Promise<string> => (
    new Promise((res) => {
        setTimeout(() => {
            res('Lolkek');
        }, 3000);
    })
);

async(asyncFunction);
