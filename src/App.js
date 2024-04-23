import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from '../node_modules/react-router-dom/dist/index';

const App = (props) => {
  return (    
    <div className="appWrapper">
      <Header />
      <Navbar />
      <div className="appWrapperContent">
        <Routes>
          <Route path="/profile" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} idCounter = {props.state.profilePage.idCounter}/>}></Route>
          <Route path="/dialogs/*" element={<Dialogs messagesPage={props.state.messagesPage} dispatch={props.dispatch} />}></Route>
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
