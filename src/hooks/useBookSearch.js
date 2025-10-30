import { useEffect, useState } from "react";

/**
 * Custom hook to handle debounced search
 * @param {string} value - Search input value
 * @param {number} delay - Debounce delay in ms
 * @returns {string} - Debounced value
 */
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};


export default useDebounce;