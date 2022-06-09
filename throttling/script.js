const button = document.getElementById('button');

const debounce = (func, delay) => {
    let canCallFunc = true;
    return () => {
        if (!canCallFunc) {
            return;
        }

        func();
        canCallFunc = false;

        setTimeout(() => {
            canCallFunc = true;
        }, delay);
    }
}

const onClick = debounce(() => console.log('Click!'), 500);

button.addEventListener('click', onClick);
