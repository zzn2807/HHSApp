import homeImage from "../img/home-image.jpg"
import "../css/Page.css"
function Home() {
    return (
        <div className="content">
            <img src={homeImage} className="home-img" />
            <h1>Welcome to Hope Health Systems!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula leo, molestie sed est sed, mollis dictum sapien. Donec sit amet ligula consequat, facilisis mi eget, gravida dolor. Nunc tempor leo massa, quis porta nisl accumsan non. Cras eget nisi lacus. Curabitur lectus massa, fermentum id nisi a, pulvinar bibendum ipsum. Phasellus et semper neque. Proin tincidunt sollicitudin augue eu bibendum. Sed quis sollicitudin tellus, vel tincidunt tortor. Pellentesque elit nulla, luctus quis sagittis ac, faucibus in justo. Sed et tempor risus. Quisque sem sapien, facilisis a pulvinar at, rutrum et purus.</p>
            <a href="#" className="btn">Grievance Policy</a>
            <a href="#" className="btn">Client's Right and Responsibilities Policy</a>
        </div>
    )
}

export default Home;