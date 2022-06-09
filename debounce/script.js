const input = document.getElementById('input');

const debounce = (func, delay) => {
    let timeout;
    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func();
        }, delay);
    }
}

input.addEventListener('keypress', debounce(() => console.log('SERVER REQUEST'), 500));
