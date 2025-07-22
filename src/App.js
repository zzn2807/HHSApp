import './css/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Menu from './Components/Menu';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
