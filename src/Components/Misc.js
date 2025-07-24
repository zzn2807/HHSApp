import phInfoImg from "../img/ph-info.jpg"
import "../css/Page.css"
function Misc() {
    return (
        <div className="content">
            <h1>Public Health Info</h1>
            <ul className="content-ul">
                <li>Lorem ipsum dolor sit amet, consectetur</li>
                <li>adipiscing elit. Nam ligula leo, molestie sed est </li>
                <li>sed, mollis dictum sapien. Donec sit amet ligula </li>
                <li>consequat, facilisis mi eget, gravida dolor. Nunc t</li>
                <li>empor leo massa, quis porta nisl accumsan non. </li>
                <li>Cras eget nisi lacus. Curabitur lectus massa, </li>
            </ul>
            <img src={phInfoImg} className="content-img"/>
            <p>
                fermentum id nisi a, pulvinar bibendum ipsum. Phasellus et semper neque. Proin tincidunt sollicitudin augue eu bibendum. Sed quis sollicitudin tellus, vel tincidunt tortor. Pellentesque elit nulla, luctus quis sagittis ac, faucibus in justo. Sed et tempor risus. Quisque sem sapien, facilisis a pulvinar at, rutrum et purus.
            </p>
            <a className="btn">Click for more info</a>
        </div>
    )
}

export default Misc;