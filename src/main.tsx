import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' ; 

const rootElement = document.getElementById('root') as HTMLElement;

// Verifica se estamos no modo de pré-renderização
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </React.StrictMode>
  );
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </React.StrictMode>
  );
}
