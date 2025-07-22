import { NavLink } from "react-router-dom";
import "../css/Menu.css"
import { useContext, useEffect } from "react";
import MenuContext from "../Context/MenuContext";
function Menu(){
    const {setMenuOpen} = useContext(MenuContext);
    
    return (
        <div className={`menu`}>
            <div className="menu-header">
                <h1 className="menu-title">Menu</h1>
                <h1 className="menu-x" onClick={()=>setMenuOpen(false)}>&#x2716;</h1>
            </div>
            <ul className="menu-list">
                <li className="menu-item"><NavLink to="/" end>Home</NavLink></li>
                <li className="menu-item"><NavLink to="/public-hours">Public Hours</NavLink></li>
                <li className="menu-item"><NavLink to="/news">Newsletters/Announcements</NavLink></li>
                <li className="menu-item"><NavLink to="survey">Client Satisfaction Survey</NavLink></li>
                <li className="menu-item"><NavLink to="/misc">Miscellaneous</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu;