import "../css/Page.css"
function PublicHours() {
    return (
        <div className="content">
            <h1>Public Hours:</h1>
            <table className="ph-table">
                <tr>
                    <td>Mon-Thurs</td>
                    <td>9:00am - 8:30pm</td>
                </tr>
                <tr>
                    <td>Friday</td>
                    <td>9:00am - 4:00pm</td>
                </tr>
            </table>
            <h1>Holidays:</h1>
            <table className="ph-table">
                <tr>
                    <td>New Year's Day</td>
                    <td>Jan 1</td>
                </tr>
                <tr>
                    <td>Martin Luther King Jr. Day</td>
                    <td>Jan 20</td>
                </tr>
                <tr>
                    <td>Presidents' Day</td>
                    <td>Feb 17</td>
                </tr>
                <tr>
                    <td>Memorial Day</td>
                    <td>May 26</td>
                </tr>
                <tr>
                    <td>Independence Day</td>
                    <td>July 4</td>
                </tr>
                <tr>
                    <td>Labor Day</td>
                    <td>Sep 1</td>
                </tr>
                <tr>
                    <td>Thanksgiving Day</td>
                    <td>Last Thu of Nov</td>
                </tr>
                <tr>
                    <td>Day After Thanksgiving</td>
                    <td>Fri After Thanksgiving</td>
                </tr>
                <tr>
                    <td>Christmas Day</td>
                    <td>Dec 25</td>
                </tr>
            </table>
        </div>
    )
}

export default PublicHours;