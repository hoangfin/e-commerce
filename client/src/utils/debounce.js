export const debounce = (cb, delay = 300) => {
    let timeoutID;
    return (...args) => {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => cb(...args), delay);
    };
};