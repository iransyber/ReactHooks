import React, {useState, createContext } from 'react';

export const DefaultContext = createContext({}); 

export const DefaultContextProvider =({children}) => {
    const [defaultData, setDefaultData] = useState('http://localhost');
    return <DefaultContext.Provider value={defaultData} >
        {children}
    </DefaultContext.Provider>
}

export default DefaultContextProvider;