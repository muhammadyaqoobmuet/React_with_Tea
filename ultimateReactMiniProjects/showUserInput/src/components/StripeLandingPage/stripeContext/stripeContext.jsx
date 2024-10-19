import { useState , useContext , createContext } from "react";
import sublinks from "../data";


export const stripeContext = createContext();

export const StripeProvider = ({children}) =>{

    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [cordinate,setCordinate] = useState({});
    const [page,setPage]= useState({page:'',links:[]})
    const openSideBar = () =>{
        setIsSideBarOpen(true)
    }
    const closeSideBar = () =>{
        setIsSideBarOpen(false)
    }
    const openSubMenu = (text, cordinates) => {
        const pageInfo = sublinks.find((link) => link.page === text); // Fixed the arrow function
        setPage(pageInfo || { page: '', links: [] }); // Ensure pageInfo is not undefined
        setCordinate(cordinates);
        setIsSubMenuOpen(true);
      };
    const closeSubMenu = () =>{
        setIsSubMenuOpen(false)
    }

    return <stripeContext.Provider value={{closeSubMenu,openSubMenu,closeSideBar,openSideBar,isSubMenuOpen,isSideBarOpen,cordinate,page}}>
        {children}
    </stripeContext.Provider>
}

export const useStripe = () =>{
    return useContext(stripeContext)
}