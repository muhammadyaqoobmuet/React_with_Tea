import { useEffect, useState } from "react";

function useCurrencyConvertor(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        
        const API_CALL = `https://v6.exchangerate-api.com/v6/f222bf9571ea7d9b8e8b5a8e/latest/${currency}`;
        
        fetch(API_CALL)
            .then((resp) => resp.json()) // Parse response as JSON
            .then((data) => setData(data.conversion_rates))
            .catch((error) => console.error("Error fetching data:", error));
    }, [currency]);

    return data;
}

export default useCurrencyConvertor;
