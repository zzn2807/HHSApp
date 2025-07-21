import {ReactComponent as Facebook} from "../img/facebook-svg.svg"
import {ReactComponent as Twitter} from "../img/twitter-svg.svg"
import {ReactComponent as Email} from "../img/email-svg.svg"
import "../css/Footer.css"
function Footer() {

    return (
        <div className="footer">
            <Facebook className="icon"/>
            <Email className="icon"/>
            <Twitter className="icon"/>
        </div>

    );
}

export default Footer;