import { useEffect, useState } from "react";

export function useLocalStorage(key, initialData) {
    const [data, setData] = useState(initialData);


    useEffect(() => {
        const existingData = JSON.parse(localStorage.getItem(key));
        if (existingData) {
            setData(existingData);
        } else {
            localStorage.setItem(key, JSON.stringify(initialData));
        }
    }, []);

    function handleUpdateStorage(updatedData) {
        if (typeof updatedData === "function") {
            setData(prevState => updatedData(prevState));
            localStorage.setItem(key, JSON.stringify(updatedData(data)));
            return;
        }
        localStorage.setItem(key, JSON.stringify(updatedData));
        setData(updatedData);
    }

    return [data, handleUpdateStorage];
}