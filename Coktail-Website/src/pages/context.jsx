import { data } from 'autoprefixer'
import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading,setLoading] = useState(true);
  const [searchTerm,setSearchTerm] = useState('a');
  const [cocktails,setCocktails] = useState([]);

    const fetchDrinks = async () => {

      try {
        setLoading(true); //  everytime we render it will show loading because we are searching
        const response = await fetch(`${url}${searchTerm}`);
        if(response){
          const data = await response.json();
          const {drinks} = data;
          if(drinks){
            const newCocktails = drinks.map((item)=>{
                const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} = item;

                return {id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,glass:strGlass}
            })
            setCocktails(newCocktails);
          }else{
              setCocktails([])
          }

          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    useEffect(()=>{
      fetchDrinks()
      
    },[searchTerm])

  return <AppContext.Provider value={{
    loading,
    searchTerm,
    setSearchTerm,
    cocktails,
            }}>
        {children}
  </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }