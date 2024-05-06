export function debounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
	fn: F,
	delay: number
): (...args: Parameters<F>) => void {
    let timeoutID: ReturnType<typeof setTimeout>;

    return (...args: Parameters<F>) => {
		clearTimeout(timeoutID);
        timeoutID = setTimeout(() => fn(...args), delay);
    };
};
