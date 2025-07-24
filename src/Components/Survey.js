
import "../css/Page.css"
function Survey() {
    return (
        <div className="content">
            <h1>Client Satisfaction Survey</h1>
            <form>
                <div className="form-div">
                    <label>Question 1</label>
                    <input type="text"></input>
                </div>
                <div className="form-div">
                    <label>Question 2</label>
                    <input type="text"></input>
                </div>
                <div className="form-div">
                    <label>Question 3</label>
                    <input type="date"></input>
                </div>
                <div className="form-div flex-row">
                    <label>Question 4</label>
                    <input type="checkbox"></input>
                    <input type="checkbox"></input>
                    <input type="checkbox"></input>
                </div>
                <div className="form-div">
                    <input type="file"></input>
                </div>
                <button className="form-submit">Submit</button>
            </form>
        </div>
    )
}

export default Survey;