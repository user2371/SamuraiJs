import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { bllAddPost } from './state.js';
import { BrowserRouter} from '../node_modules/react-router-dom/dist/index';
import { bllAddDialogsMessage } from './state.js';
import { bllUpdateNewPostText } from './state.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireTree = (state) => {  
  root.render(
    <BrowserRouter>
    <React.StrictMode>
      <App state={state} bllAddPost={bllAddPost} bllUpdateNewPostText={bllUpdateNewPostText} bllAddDialogsMessage={bllAddDialogsMessage} />
    </React.StrictMode>
    </BrowserRouter>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();