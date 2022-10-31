import { createContext, useContext, useState } from "react";



const myContext = createContext();

export  function AppProvider({children}){

     const [modal, setModal] = useState(false);
     const [menu, setMenu] = useState(false);


     const closeModal = ()=>{
        setModal(false)
     };

     const openModal = ()=>{
        setModal(true)
     };

     const closeMenu = ()=>{
        setMenu(false)
     };

     const openMenu = ()=>{
        setMenu(true)
     };


    return( <myContext.Provider  value={{modal, menu,
    closeModal, openModal, closeMenu, openMenu}}>
        {children}
    </myContext.Provider>)
}



export function useGlobalContext(){

    return useContext(myContext);
}