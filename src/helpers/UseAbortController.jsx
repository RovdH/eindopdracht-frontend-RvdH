import { useEffect, useRef } from 'react';

export const useAbortController = () => {
    const abortControllerRef = useRef(new AbortController());

    useEffect(() => {
        const controller = abortControllerRef.current;

        return () => {
            controller.abort();
        };
    }, []);

    return abortControllerRef.current;
};
