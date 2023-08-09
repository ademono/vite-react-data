import React, { createContext, useContext, useState } from "react";

// Create a context
const DataContext = createContext();

// Create a provider component
const LanguageProvider = ({ children }) => {
    const [data, setData] = useState(1);

    const global_data = {
        data,
        setData,
    };

    return (
        <DataContext.Provider value={global_data}>
            {children}
        </DataContext.Provider>
    );
};

export { LanguageProvider, DataContext };
