import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoState from './store/states/TodoState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoState>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TodoState>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
