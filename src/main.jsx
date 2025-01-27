import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'
import React from 'react';
import Camara from "./components/Camara/Camara.jsx"
import ReactDOM from 'react-dom'
import './App.css';
import reportWebVitals from './reportWebVitals';
createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <App />
</Provider>
)
ReactDOM.render(
    <div className='App'>
      <Camara></Camara>
    </div>,
    document.getElementById('root')
  );
  reportWebVitals();