import { createContext, useState } from "react";
import { useEffect } from "react";
const MenuContext = createContext(null);

export function MenuProvider(props){
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(()=>{
        if(menuOpen){
            document.querySelector('.menu').classList.add('open');
        }
        else{
            document.querySelector('.menu').classList.remove('open');
        }
    },[menuOpen])
    return (
        <MenuContext.Provider value={{
            menuOpen,
            setMenuOpen
        }}>
            {props.children}
        </MenuContext.Provider>
    );
}

export default MenuContext;