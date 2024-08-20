import {createContext , useContext} from 'react'

export const NotIntrestedContext = createContext({
    deleteTour : (id)=>{}
}) 

export const NotIntrestedContextProvider = NotIntrestedContext.Provider

export const useNotIntrested = () =>{
    return useContext(NotIntrestedContext)
}