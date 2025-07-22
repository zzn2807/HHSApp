import { NavLink } from "react-router-dom";
import "../css/Menu.css"
import { useContext, useState } from "react";
import MenuContext from "../Context/MenuContext";
function Menu() {
    const { setMenuOpen } = useContext(MenuContext);
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50

    const onTouchStart = (e) => {
        setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
        // if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')
        // add your conditional logic here
        if(isLeftSwipe){
            setMenuOpen(false);
        }
    }
    return (
        <div className="menu" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <div className="menu-header">
                <h1 className="menu-title">Menu</h1>
                <h1 className="menu-x" onClick={() => setMenuOpen(false)}>&#x2716;</h1>
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