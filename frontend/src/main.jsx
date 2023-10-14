import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { store,persistor } from './redux/Store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
    <ToastContainer theme='dark' position='top-right' autoClose={300} closeOnClick 
    pauseOnHover={false} />
     <App />
  </BrowserRouter>
  </PersistGate>
  </Provider>

  </React.StrictMode>,
)
