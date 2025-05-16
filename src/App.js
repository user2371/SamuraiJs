import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Routes, Route } from '../node_modules/react-router-dom/dist/index';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { UsersContainer } from './components/Users/UsersContainer';

const App = (props) => {
  return (    
    <div className="appWrapper">
      <Header />
      <Navbar />
      <div className="appWrapperContent">
        <Routes>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/dialogs/*" element={<DialogsContainer/>}></Route>
          <Route path="/users" element={<UsersContainer/>}></Route>
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
