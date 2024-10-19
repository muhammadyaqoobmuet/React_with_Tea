
import { createContext, useEffect, useState } from "react";
import dummyApiCallService from "../data";

export const ApiContext = createContext(null);

export default function GlobalApiDummyDataContext({ children }) {
    const [loading, setLoading] = useState(false);
    const [featureFlags, setFeatureFlags] = useState({});

    async function fetchData() {
        setLoading(true);
        try {
            const response = await dummyApiCallService();
            if (response) {
                setFeatureFlags(response);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ApiContext.Provider value={{ loading, featureFlags }}>
            {children}
        </ApiContext.Provider>
    );
}