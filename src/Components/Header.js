import HHS_Logo from "../img/HHS_Logo.png"
import "../css/Header.css"
function Header() {

    return (
        <div className="header">
            <div className="burger-menu">&equiv;</div>
            <img className="logo" src={HHS_Logo}/>
        </div>

    );
}

export default Header;