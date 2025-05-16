import './index.css';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from '../node_modules/react-router-dom/dist/index';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from '../node_modules/react-redux/dist/react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
    </BrowserRouter>
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





