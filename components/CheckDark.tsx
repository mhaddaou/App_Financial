import { useEffect } from 'react';

function useDarkModeDetection() {
    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleDarkModeChange = (event: Event) => {
            const matches = darkModeMediaQuery.matches;
            if (matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };

        darkModeMediaQuery.addEventListener('change', handleDarkModeChange);
        handleDarkModeChange(new Event('change')); // Call initially to apply correct class

        return () => {
            darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
        };
    }, []);
}

export default useDarkModeDetection;
