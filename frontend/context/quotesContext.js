// Create your context here
import React, {createContext} from 'react'

export const QuotesContext = createContext ()

const avlue = {
    car: 'Toyota Celica'
}

export function QuotesProvider(props){

    return (
        <QuotesContext.Provider value={value}>
            {props.children}
            </QuotesContext.Provider>
    )
}
