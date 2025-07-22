import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MenuProvider } from './Context/MenuContext';


const renderReactDom = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <MenuProvider>
          <App />
        </MenuProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

if (window.cordova) {
  document.addEventListener('deviceready', () => {
    renderReactDom();
  }, false);
} else {
  renderReactDom();
}

