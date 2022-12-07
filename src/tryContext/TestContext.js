import React from 'react'

export const TextCreateContext = React.createContext();

export  const TextCreateProvider = ({children}) => {
    return (
        <TextCreateContext.Provider value={{test:"Ami test!"}}>
            {children}
        </TextCreateContext.Provider>
    )
}