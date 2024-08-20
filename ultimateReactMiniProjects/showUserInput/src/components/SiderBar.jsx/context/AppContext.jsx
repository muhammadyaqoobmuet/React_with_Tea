import { useContext , createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({children})=>{
    const [modal,setModal]= useState(false);
    const [sideBar , setSideBar] = useState(false)

    const openModal = () =>{
        setModal(true)
    }
    const closeModal = () =>{
        setModal(false)
    }

    const openSideBar = ()=>{
        setSideBar(true)
    }
    const closeSideBar = ()=>{
        setSideBar(false)
    }


    return  <AppContext.Provider value={{modal,sideBar,openModal,closeModal,openSideBar,closeSideBar}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = ()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider,useAppContext}