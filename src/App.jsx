import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (    
    <div className="appWrapper">
      <HeaderContainer />
      <Navbar />
      <div className="appWrapperContent">
        <Routes>
          <Route path="/profile/:userId?" element={<ProfileContainer/>}></Route>
          <Route path="/dialogs/*" element={<DialogsContainer/>}></Route>
          <Route path="/users/*" element={<UsersContainer/>}></Route>
        </Routes>
      </div>
    </div>
    
  );
}



export default App;
