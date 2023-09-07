import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetStyle from './style/ResetStyle';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle />
    <App />
  </React.StrictMode>
);