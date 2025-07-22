import './css/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Menu from './Components/Menu';
import MenuContext from './Context/MenuContext';
import { Route, Routes } from 'react-router-dom';
import { useState, useContext } from 'react';
import PublicHours from './Components/PublicHours';
import News from './Components/News';
function App() {
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
    if (isRightSwipe) {
      setMenuOpen(true);
    }
  }
  return (
    <div className="App" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <Menu />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/public-hours" element={<PublicHours/>}/>
        <Route path="/news" element={<News/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
