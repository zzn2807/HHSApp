import newsImg from "../img/news-img.jpg"
import "../css/Page.css"
function News() {
    return (
        <div className="content">
            <h1>Newsletter/Announcements</h1>
            <img src={newsImg} className="content-img" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula leo, molestie sed est sed, mollis dictum sapien. Donec sit amet ligula consequat, facilisis mi eget, gravida dolor. Nunc tempor leo massa, quis porta nisl accumsan non. Cras eget nisi lacus. Curabitur lectus massa, fermentum id nisi a, pulvinar bibendum ipsum. Phasellus et semper neque. Proin tincidunt sollicitudin augue eu bibendum. Sed quis sollicitudin tellus, vel tincidunt tortor. Pellentesque elit nulla, luctus quis sagittis ac, faucibus in justo. Sed et tempor risus. Quisque sem sapien, facilisis a pulvinar at, rutrum et purus.</p>
            <h1>Events</h1>
            <table>
                <tr>
                    <td>Event 1</td>
                    <td>August 2</td>
                </tr>
                <tr>
                    <td>Event 2</td>
                    <td>September 4</td>
                </tr>
                <tr>
                    <td>Event 3</td>
                    <td>October 6</td>
                </tr>
            </table>
        </div>
    )
}

export default News;