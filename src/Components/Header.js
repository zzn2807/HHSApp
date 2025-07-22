import HHS_Logo from "../img/HHS_Logo.png"
import "../css/Header.css"
import { useContext } from "react";
import MenuContext from "../Context/MenuContext";
function Header() {
    const {setMenuOpen} = useContext(MenuContext);
    return (
        <div className="header">
            <div className="burger-menu" onClick={()=>setMenuOpen(true)}>&equiv;</div>
            <img className="logo" src={HHS_Logo}/>
        </div>

    );
}

export default Header;